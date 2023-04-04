import './globals.css'

export const metadata = {
  title: 'Yeniyol Kuyumculuk',
}

export const config = {
  unstable_runtimeJS: false
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
