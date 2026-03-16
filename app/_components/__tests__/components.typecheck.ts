// Type-check contract for all 6 components.
// This file MUST compile without errors once components are correctly implemented.
// With stub implementations (never props), these imports will cause TS errors.

import VideoPlayer from '../VideoPlayer'
import AudioPlayer from '../AudioPlayer'
import QuizQuestion from '../QuizQuestion'
import DiagramImage from '../DiagramImage'
import HeroSection from '../HeroSection'
import CourseMap from '../CourseMap'

// Verify prop shapes are correct
const _videoPlayerCheck: Parameters<typeof VideoPlayer>[0] = {
  src: '/videos/test.mp4',
  title: 'Test Video',
  poster: '/images/poster.jpg',
  chapters: [{ time: 65, label: 'Chapter 1' }],
}

const _audioPlayerCheck: Parameters<typeof AudioPlayer>[0] = {
  src: '/audio/podcast.mp3',
  title: 'Test Podcast',
}

const _quizQuestionCheck: Parameters<typeof QuizQuestion>[0] = {
  question: 'What is Claude?',
  options: ['An AI', 'A person', 'A tool'],
  correctIndex: 0,
  explanation: 'Claude is an AI assistant.',
  contentLink: '/part1-foundations',
}

const _diagramImageCheck: Parameters<typeof DiagramImage>[0] = {
  src: '/images/diagram.png',
  alt: 'Agentic loop diagram',
  caption: 'The agentic loop',
}

// HeroSection and CourseMap take no props
const _heroSectionCheck: Parameters<typeof HeroSection>[0] = {}
const _courseMapCheck: Parameters<typeof CourseMap>[0] = {}

export {}
