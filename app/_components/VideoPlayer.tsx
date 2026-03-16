'use client'

import { Suspense, useEffect, useRef, useState } from 'react'
import { parseAsInteger, useQueryState } from 'nuqs'
import { Card, CardContent } from '@/components/ui/card'

interface Chapter {
  time: number
  label: string
}

interface VideoPlayerProps {
  src: string
  title: string
  poster?: string
  chapters?: Chapter[]
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

function VideoPlayerInner({ src, title, poster, chapters }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [activeChapter, setActiveChapter] = useState<number>(-1)
  const [copied, setCopied] = useState(false)
  const [t, setT] = useQueryState('t', parseAsInteger)

  useEffect(() => {
    if (t !== null && videoRef.current) {
      videoRef.current.currentTime = t
    }
  }, [t])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !chapters?.length) return

    function handleTimeUpdate() {
      const current = video!.currentTime
      let active = -1
      for (let i = chapters!.length - 1; i >= 0; i--) {
        if (current >= chapters![i].time) {
          active = i
          break
        }
      }
      setActiveChapter(active)
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    return () => video.removeEventListener('timeupdate', handleTimeUpdate)
  }, [chapters])

  function seekTo(chapter: Chapter, index: number) {
    if (videoRef.current) {
      videoRef.current.currentTime = chapter.time
      setActiveChapter(index)
      void setT(chapter.time)
    }
  }

  async function handleShare() {
    const currentTime = Math.floor(videoRef.current?.currentTime ?? 0)
    const url = new URL(window.location.href)
    url.searchParams.set('t', String(currentTime))
    await navigator.clipboard.writeText(url.toString())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="my-6 overflow-hidden">
      <CardContent className="p-0">
        {/* Video */}
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls
          className="w-full block"
        />

        {/* Title bar + share */}
        <div className="flex items-center justify-between px-4 py-2 border-t">
          <span className="text-sm text-muted-foreground">🎬 {title}</span>
          <button
            onClick={() => void handleShare()}
            className="text-xs px-2 py-1 rounded transition-colors text-muted-foreground hover:text-foreground"
            title="שתפו קישור"
          >
            {copied ? 'הקישור הועתק ✓' : '🔗 שיתוף'}
          </button>
        </div>

        {/* Chapters */}
        {chapters && chapters.length > 0 && (
          <div className="px-4 pb-3 border-t">
            <p className="text-xs font-semibold mb-2 mt-2 uppercase tracking-wide text-muted-foreground">
              פרקים
            </p>
            <ul className="space-y-1">
              {chapters.map((chapter, i) => (
                <li key={i}>
                  <button
                    onClick={() => seekTo(chapter, i)}
                    className="w-full text-right flex items-center gap-3 px-2 py-1.5 rounded text-sm transition-colors hover:bg-muted"
                    style={{
                      color: activeChapter === i ? 'var(--primary)' : undefined,
                      fontWeight: activeChapter === i ? 600 : 400,
                    }}
                  >
                    <span className="font-mono text-xs shrink-0 text-muted-foreground">
                      {formatTime(chapter.time)}
                    </span>
                    <span>{chapter.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function VideoPlayer(props: VideoPlayerProps) {
  return (
    <Suspense fallback={
      <Card className="my-6 overflow-hidden">
        <CardContent className="p-0">
          <div className="w-full bg-muted" style={{ minHeight: 300 }} />
        </CardContent>
      </Card>
    }>
      <VideoPlayerInner {...props} />
    </Suspense>
  )
}
