import { Footer, LastUpdated, Layout, Navbar } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import type { ReactNode } from 'react'

import '@fontsource/rubik/400.css'
import '@fontsource/rubik/500.css'
import '@fontsource/rubik/600.css'
import '@fontsource/rubik/700.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/500.css'

import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: 'מ-Copy-Paste ל-Vibe Coding עם Claude Code',
  description:
    'קורס מלא למפתחי Full-Stack — מ-ChatGPT Copy-Paste ל-Vibe Coding עם Claude Code',
}

const navbar = (
  <Navbar
    logo={
      <span className="font-bold text-lg">
        🎓 מ-ChatGPT ל-Vibe Coding
      </span>
    }
  />
)

const search = (
  <Search
    placeholder="חיפוש בתוכן הקורס..."
    emptyResult=".לא נמצאו תוצאות"
    errorText=".נכשל בטעינת אינדקס החיפוש"
    loading="טוען..."
  />
)

const footer = <Footer>קורס Claude Code — {new Date().getFullYear()}</Footer>

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <Head />
      <body>
        <NuqsAdapter>
          <Layout
            navbar={navbar}
            pageMap={await getPageMap()}
            footer={footer}
            search={search}
            sidebar={{ autoCollapse: true, defaultMenuCollapseLevel: 1 }}
            navigation={{ prev: true, next: true }}
            copyPageButton={false}
            editLink={null}
            feedback={{ content: null }}
            toc={{
              title: 'בעמוד הזה',
              backToTop: 'חזרה למעלה',
            }}
            themeSwitch={{
              dark: 'כהה',
              light: 'בהיר',
              system: 'מערכת',
            }}
            lastUpdated={<LastUpdated locale="he">עודכן לאחרונה ב-</LastUpdated>}
          >
            {children}
          </Layout>
        </NuqsAdapter>
      </body>
    </html>
  )
}
