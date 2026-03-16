'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface AudioPlayerProps {
  src: string
  title: string
}

export default function AudioPlayer({ src, title }: AudioPlayerProps) {
  return (
    <Card className="my-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>🎧</span>
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio controls style={{ width: '100%' }}>
          <source src={src} />
          הדפדפן שלך אינו תומך בנגן שמע.
        </audio>
      </CardContent>
    </Card>
  )
}
