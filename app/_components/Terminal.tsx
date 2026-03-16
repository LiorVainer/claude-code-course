'use client'

type TerminalLine = {
  prompt?: string
  command?: string
  output?: string
  color?: string
  rtl?: boolean
}

type TerminalProps = {
  lines: TerminalLine[]
  title?: string
}

const HE_REGEX = /[\u0590-\u05FF]/

function hasHebrew(text: string): boolean {
  return HE_REGEX.test(text)
}

export default function Terminal({ lines, title = 'Terminal' }: TerminalProps) {
  return (
    <div
      dir="ltr"
      className="my-6 rounded-2xl overflow-hidden border border-border bg-card shadow-lg dark:bg-[#0d1117] dark:border-[#30363d] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
      style={{ fontFamily: '"JetBrains Mono", monospace' }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-3 px-5 py-3 border-b border-border bg-muted/50 dark:bg-[#161b22] dark:border-[#30363d]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-[#28c840]" />
        </div>
        <span
          dir={hasHebrew(title) ? 'rtl' : 'ltr'}
          className="text-sm ml-2 text-muted-foreground dark:text-[#8b949e]"
          style={hasHebrew(title) ? { fontFamily: '"Rubik", "JetBrains Mono", sans-serif' } : undefined}
        >
          {title}
        </span>
      </div>

      {/* Terminal content */}
      <div className="px-5 py-4">
        {lines.map((line, i) => {
          const text = line.command || line.output || ''
          const isRtl = line.rtl ?? hasHebrew(text)

          return (
            <div key={i} className="mb-1">
              {line.command && (
                <div
                  dir={isRtl ? 'rtl' : 'ltr'}
                  className="-mx-5 px-5 py-1 flex items-center gap-2.5 bg-black/5 dark:bg-white/5 rounded"
                  style={isRtl ? { fontFamily: '"Rubik", "JetBrains Mono", sans-serif' } : undefined}
                >
                  <span className="text-sm shrink-0 text-green-600 dark:text-[#28c840]">
                    {line.prompt || '❯'}
                  </span>
                  <span className="text-sm text-foreground dark:text-[#e6edf3]">
                    {line.command}
                  </span>
                </div>
              )}
              {line.output && (
                <div
                  dir={isRtl ? 'rtl' : 'ltr'}
                  className="text-sm pl-2 mt-0.5 whitespace-pre-wrap text-muted-foreground"
                  style={{
                    ...(line.color ? { color: line.color } : {}),
                    ...(isRtl ? { fontFamily: '"Rubik", "JetBrains Mono", sans-serif', paddingLeft: 0, paddingRight: '0.5rem' } : {}),
                  }}
                >
                  {line.output}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
