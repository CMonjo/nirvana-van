import '@/app/ui/global.css'
import { Kobe11 } from '@/app/ui/fonts'
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${Kobe11.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
