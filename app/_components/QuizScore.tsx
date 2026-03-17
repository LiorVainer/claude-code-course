'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { Card, CardContent } from '@/components/ui/card'

interface QuizContextType {
  reportAnswer: (correct: boolean) => void
}

const QuizContext = createContext<QuizContextType | null>(null)

export function useQuizScore() {
  return useContext(QuizContext)
}

interface QuizScoreProps {
  total: number
  children: ReactNode
}

export default function QuizScore({ total, children }: QuizScoreProps) {
  const [answered, setAnswered] = useState(0)
  const [correct, setCorrect] = useState(0)

  function reportAnswer(isCorrect: boolean) {
    setAnswered((a) => a + 1)
    if (isCorrect) setCorrect((c) => c + 1)
  }

  const allDone = answered >= total

  return (
    <QuizContext value={{ reportAnswer }}>
      {children}

      {allDone && (
        <Card className="my-6 border-2 border-primary">
          <CardContent className="py-6 text-center">
            <p className="text-2xl font-bold mb-2">
              {correct === total ? '🎉' : correct >= total * 0.7 ? '👏' : '💪'}
            </p>
            <p className="text-xl font-bold">
              {correct} מתוך {total} תשובות נכונות
            </p>
            <p className="text-muted-foreground mt-1">
              {correct === total
                ? 'מושלם! עברתם את הבוחן בהצלחה'
                : correct >= total * 0.7
                  ? 'כל הכבוד! רוב התשובות נכונות'
                  : 'שווה לחזור על החומר ולנסות שוב'}
            </p>
          </CardContent>
        </Card>
      )}
    </QuizContext>
  )
}
