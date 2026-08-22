/**
 * Contact form handler — runs as a Vercel serverless function.
 *
 * Delivery uses the Resend HTTP API (no npm dependency, just fetch).
 * Required environment variables in Vercel → Settings → Environment Variables:
 *
 *   NUXT_RESEND_API_KEY   re_xxxxxxxx        (resend.com → API Keys)
 *   NUXT_CONTACT_TO       your@email.com     (defaults to the CV address)
 *   NUXT_CONTACT_FROM     Portfolio <onboarding@resend.dev>
 *
 * `onboarding@resend.dev` works with no domain verification, but Resend will
 * only deliver it to the address that owns the API key — which is exactly what
 * a personal contact form needs. Swap in your own verified domain later.
 */

type ContactBody = {
  name?: string
  email?: string
  subject?: string
  message?: string
  budget?: string
  /** Honeypot — real users never see this field, bots fill it in. */
  company?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/**
 * Best-effort in-memory throttle. Serverless instances are ephemeral and not
 * shared, so this thins out bursts from a single warm instance rather than
 * providing a hard global guarantee.
 */
const hits = new Map<string, number[]>()
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5

function isRateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter(t => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > MAX_PER_WINDOW
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string))

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactBody>(event)

  // Honeypot: accept silently so the bot doesn't learn it was caught.
  if (body?.company) {
    return { ok: true }
  }

  const name = body?.name?.trim() ?? ''
  const email = body?.email?.trim() ?? ''
  const subject = body?.subject?.trim() ?? ''
  const message = body?.message?.trim() ?? ''
  const budget = body?.budget?.trim() || 'Not specified'

  const errors: Record<string, string> = {}
  if (name.length < 2) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.'
  if (subject.length < 3) errors.subject = 'Please add a subject.'
  if (message.length < 10) errors.message = 'Please write at least 10 characters.'
  if (message.length > 5000) errors.message = 'Message is too long (5000 characters max).'

  if (Object.keys(errors).length) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Validation failed',
      data: { errors },
    })
  }

  const ip = getRequestHeader(event, 'x-forwarded-for')?.split(',')[0]?.trim()
    || getRequestHeader(event, 'x-real-ip')
    || 'unknown'

  if (isRateLimited(ip)) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Too many messages sent. Please try again in a few minutes.',
    })
  }

  const config = useRuntimeConfig(event)

  if (!config.resendApiKey) {
    throw createError({
      statusCode: 503,
      statusMessage: 'The contact form is not configured yet.',
    })
  }

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;line-height:1.6;color:#1a2230">
      <h2 style="margin:0 0 16px;font-size:18px">New message from your portfolio</h2>
      <table style="border-collapse:collapse;font-size:14px">
        <tr><td style="padding:4px 16px 4px 0;color:#55617a">Name</td><td><strong>${escapeHtml(name)}</strong></td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#55617a">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#55617a">Budget</td><td>${escapeHtml(budget)}</td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#55617a">Subject</td><td>${escapeHtml(subject)}</td></tr>
      </table>
      <hr style="margin:20px 0;border:none;border-top:1px solid #d8dee9">
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
    </div>
  `

  try {
    await $fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${config.resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: {
        from: config.contactFrom,
        to: [config.contactTo],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        html,
      },
    })
  } catch (error: any) {
    console.error('[contact] Resend request failed:', error?.data ?? error?.message ?? error)
    throw createError({
      statusCode: 502,
      statusMessage: 'Could not send your message right now.',
    })
  }

  return { ok: true }
})
