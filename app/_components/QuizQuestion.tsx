'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useQuizScore } from './QuizScore'

const HE_REGEX = /[\u0590-\u05FF]/

interface QuizQuestionProps {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  contentLink?: string
  contentLabel?: string
  number?: number
  onAnswer?: (correct: boolean) => void
}

type AnswerState = 'unanswered' | 'correct' | 'wrong'

export default function QuizQuestion({
  question,
  options,
  correctIndex,
  explanation,
  contentLink,
  contentLabel,
  number,
  onAnswer,
}: QuizQuestionProps) {
  const [selected, setSelected] = useState<number | null>(null)
  const [answerState, setAnswerState] = useState<AnswerState>('unanswered')
  const quizScore = useQuizScore()

  function handleSelect(index: number) {
    if (answerState !== 'unanswered') return
    setSelected(index)
    const isCorrect = index === correctIndex
    setAnswerState(isCorrect ? 'correct' : 'wrong')
    onAnswer?.(isCorrect)
    quizScore?.reportAnswer(isCorrect)
  }

  function getButtonStyle(index: number): string {
    if (answerState === 'unanswered') return ''
    if (index === correctIndex) {
      return 'bg-green-500/20 border-green-500 text-green-700 dark:text-green-400 animate-pulse'
    }
    if (index === selected && answerState === 'wrong') {
      return 'bg-red-500/20 border-red-500 text-red-700 dark:text-red-400 animate-[shake_0.4s_ease-in-out]'
    }
    return 'opacity-50'
  }

  return (
    <Card className="my-4">
      <CardHeader>
        <p className="font-semibold text-lg text-right">
          {number != null && <span className="text-muted-foreground ml-2">#{number}</span>}
          {question}
        </p>
      </CardHeader>
      <CardContent className="space-y-2">
        {options.map((option, index) => (
          <Button
            key={index}
            variant="outline"
            dir={HE_REGEX.test(option) ? 'rtl' : 'ltr'}
            disabled={answerState !== 'unanswered'}
            onClick={() => handleSelect(index)}
            className={cn(
              'w-full min-h-[48px] h-auto py-3 px-4 whitespace-normal justify-start',
              !HE_REGEX.test(option) && 'font-mono text-sm',
              getButtonStyle(index)
            )}
          >
            {option}
          </Button>
        ))}

        {answerState !== 'unanswered' && (
          <div className="mt-4 p-3 rounded-lg bg-muted text-sm text-right">
            <p>
              <span className="ml-1">{answerState === 'correct' ? '✅' : '❌'}</span>
              {explanation}
            </p>
            {answerState === 'wrong' && contentLink && (
              <a
                href={contentLink}
                className="block mt-2 text-primary underline underline-offset-4"
              >
                חזרו ל: {contentLabel ?? contentLink}
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
