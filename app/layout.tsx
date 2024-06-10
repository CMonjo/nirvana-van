import '@/app/ui/global.css'
import { Kobe11 } from '@/app/ui/fonts'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${Kobe11.className}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
