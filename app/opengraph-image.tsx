import { ImageResponse } from 'next/og'

export const alt = 'Dr. Levy Marinho, Cirurgião-Dentista'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{
      display: 'flex',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      background: 'radial-gradient(ellipse at 50% 0%, #383027 0%, #191919 62%)',
      color: '#f5f1eb',
      fontFamily: 'Georgia, serif',
    }}>
      <div style={{ display: 'flex', width: 48, height: 1, background: '#c6a47e', marginBottom: 34 }} />
      <div style={{ display: 'flex', fontSize: 62, letterSpacing: '-1px' }}>Dr. Levy Marinho</div>
      <div style={{ display: 'flex', marginTop: 18, fontFamily: 'Arial, sans-serif', fontSize: 22, letterSpacing: '4px', color: '#c6a47e' }}>CIRURGIÃO-DENTISTA · CRO-CE: 13084</div>
      <div style={{ display: 'flex', width: 48, height: 1, background: '#c6a47e', marginTop: 34 }} />
      <div style={{ display: 'flex', marginTop: 27, fontSize: 24, fontStyle: 'italic', color: '#d5cec5' }}>Saúde, estética e bem-estar para o seu sorriso.</div>
    </div>,
    { ...size },
  )
}
