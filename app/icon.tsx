import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default async function Icon() {
  const logo = await readFile(join(process.cwd(), 'public/images/dr-levy-marinho-logo.png'))
  const logoData = `data:image/png;base64,${logo.toString('base64')}`

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        border: '2px solid #c6a47e',
        borderRadius: '50%',
        background: '#efeeeb',
      }}
    >
      <img
        src={logoData}
        alt=""
        style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: 4 }}
      />
    </div>,
    size,
  )
}
