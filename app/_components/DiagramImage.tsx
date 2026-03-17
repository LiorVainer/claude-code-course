'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

interface DiagramImageProps {
  src: string
  alt: string
  caption?: string
}

export default function DiagramImage({ src, alt, caption }: DiagramImageProps) {
  const [fullscreen, setFullscreen] = useState(false)

  return (
    <>
      <Card className="my-8 overflow-hidden">
        <CardContent className="p-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {/* Light mode image */}
          <img
            src={src}
            alt={alt}
            className="w-full h-auto block dark:hidden"
          />
          {/* Dark mode image — swap -dark suffix */}
          <img
            src={src.replace(/(\.\w+)$/, '-dark$1')}
            alt={alt}
            className="w-full h-auto hidden dark:block"
          />
        </CardContent>
        {(caption || true) && (
          <CardFooter className="flex items-center justify-between gap-2 py-2 px-4">
            {caption && (
              <p className="text-sm text-muted-foreground text-right flex-1">{caption}</p>
            )}
            <button
              onClick={() => setFullscreen(true)}
              className="text-xs px-2 py-1 rounded text-muted-foreground hover:text-foreground transition-colors md:hidden shrink-0"
            >
              🔍 הגדילו לצפייה
            </button>
          </CardFooter>
        )}
      </Card>

      {/* Fullscreen overlay */}
      {fullscreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.9)' }}
          onClick={() => setFullscreen(false)}
        >
          <button
            onClick={() => setFullscreen(false)}
            className="absolute top-4 right-4 text-white text-2xl w-10 h-10 flex items-center justify-center rounded-full"
            style={{ background: 'rgba(255,255,255,0.15)' }}
            aria-label="סגור"
          >
            ✕
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
