import type { Metadata } from 'next'
import { Layout } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import { SiteNavbar } from '@/src/components/SiteNavbar'

export const metadata: Metadata = {
  title: {
    template: '%s – Pebble',
    default: 'Pebble',
  },
  description: 'Pebble Design System — iOS 26 Liquid Glass component library',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'rgb(240, 238, 248)' },
    { media: '(prefers-color-scheme: dark)', color: 'rgb(15, 13, 26)' },
  ],
}

const navbar = <SiteNavbar showSearch />

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pageMap = await getPageMap()

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Layout
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/kljevar/pebble"
          footer={<></>}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
