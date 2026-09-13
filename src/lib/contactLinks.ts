const WHATSAPP_DEMO_MESSAGE =
  "Hi TBD Fitness, I'd like to book a demo class. Could you share availability?"

export function buildWhatsAppUrl(
  phoneDigits: string,
  message = WHATSAPP_DEMO_MESSAGE,
) {
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`
}

export function buildMapsDirectionsUrl(destination: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`
}

export function buildMapsEmbedUrl(query: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&hl=en&z=15&output=embed`
}
