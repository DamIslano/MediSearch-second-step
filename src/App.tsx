import { useState } from 'react'
import { CUSTOM_TOPIC_MAX_LENGTH } from './components/SearchAdd'
import {
  getSubtopicsForTopic,
  getSubtopicsTitle,
  type TopicOption,
} from './data/subtopics'
import { FinalScreen } from './screens/FinalScreen'
import { SubtopicsScreen } from './screens/SubtopicsScreen'
import { TopicsScreen } from './screens/TopicsScreen'
import { WelcomeScreen } from './screens/WelcomeScreen'
import './App.css'

type Step = 'welcome' | 'topics' | 'subtopics' | 'final'
type Direction = 'forward' | 'back'

const STEP_ORDER: Step[] = ['welcome', 'topics', 'subtopics', 'final']

export default function App() {
  const [step, setStep] = useState<Step>('welcome')
  const [direction, setDirection] = useState<Direction>('forward')
  const [topic, setTopic] = useState<TopicOption | null>(null)
  const [selectedSubtopics, setSelectedSubtopics] = useState<string[]>([])

  const goTo = (next: Step) => {
    const from = STEP_ORDER.indexOf(step)
    const to = STEP_ORDER.indexOf(next)
    setDirection(to >= from ? 'forward' : 'back')
    setStep(next)
  }

  const handleTopicSelect = (next: TopicOption) => {
    setTopic(next)
    if (next !== topic) {
      setSelectedSubtopics([])
    }
  }

  const handleTopicsContinue = () => {
    if (!topic) return
    if (topic === 'other') {
      goTo('final')
      return
    }
    goTo('subtopics')
  }

  const handleToggleSubtopic = (value: string) => {
    setSelectedSubtopics((prev) => {
      const exists = prev.some(
        (item) => item.toLowerCase() === value.toLowerCase(),
      )
      if (exists) {
        return prev.filter(
          (item) => item.toLowerCase() !== value.toLowerCase(),
        )
      }
      return [...prev, value]
    })
  }

  const handleAddSubtopic = (value: string): boolean => {
    const trimmed = value.trim().slice(0, CUSTOM_TOPIC_MAX_LENGTH)
    if (!trimmed) return false

    const alreadySelected = selectedSubtopics.some(
      (item) => item.toLowerCase() === trimmed.toLowerCase(),
    )
    if (alreadySelected) return false

    const predefined = topic ? getSubtopicsForTopic(topic) : []
    const match = predefined.find(
      (item) => item.toLowerCase() === trimmed.toLowerCase(),
    )

    setSelectedSubtopics((prev) => [...prev, match ?? trimmed])
    return true
  }

  return (
    <div className="app-shell">
      <div className="app-frame">
        <div
          key={step}
          className={`screen-transition screen-transition--${direction}`}
        >
          {step === 'welcome' && (
            <WelcomeScreen onContinue={() => goTo('topics')} />
          )}

          {step === 'topics' && (
            <TopicsScreen
              selected={topic}
              onSelect={handleTopicSelect}
              onContinue={handleTopicsContinue}
              onBack={() => goTo('welcome')}
            />
          )}

          {step === 'subtopics' && topic && topic !== 'other' && (
            <SubtopicsScreen
              title={getSubtopicsTitle(topic)}
              options={getSubtopicsForTopic(topic)}
              selected={selectedSubtopics}
              onToggle={handleToggleSubtopic}
              onAdd={handleAddSubtopic}
              onContinue={() => goTo('final')}
              onBack={() => goTo('topics')}
            />
          )}

          {step === 'final' && <FinalScreen />}
        </div>
      </div>
    </div>
  )
}
