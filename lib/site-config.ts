export const siteConfig = {
  name: 'Dr. Levy Marinho',
  title: 'Cirurgião-Dentista',
  registration: 'CRO-CE: 13084',
  tagline: 'Saúde, estética e bem-estar para o seu sorriso.',
  logoPath: '/images/dr-levy-marinho-logo.png',
  phone: '+55 88 99738-6145',
  address: '',
  googleMapsUrl: 'https://maps.app.goo.gl/jpXwot5CoeiMsFKG9',
  whatsappMessage: 'Olá, Dr. Levy! Encontrei seu perfil e gostaria de agendar uma consulta. Poderia me informar os horários disponíveis?',
  about: {
    presentation: '',
    academicBackground: '',
    experience: '',
    careApproach: '',
  },
} as const

const configuredPhone: string = siteConfig.phone

export const whatsappUrl = configuredPhone
  ? `https://wa.me/${configuredPhone.replace(/\D/g, '')}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`
  : ''
