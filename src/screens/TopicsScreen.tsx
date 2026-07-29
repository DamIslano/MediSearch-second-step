import { BackButton } from '../components/BackButton'
import { ContinueButton } from '../components/ContinueButton'
import type { TopicOption } from '../data/subtopics'
import { useScrollFade } from '../hooks/useScrollFade'
import './TopicsScreen.css'

const OPTIONS: { value: TopicOption; label: string }[] = [
  { value: 'personal-health', label: 'Personal Health' },
  { value: 'research', label: 'Research' },
  { value: 'other', label: 'Other' },
]

type TopicsScreenProps = {
  selected: TopicOption | null
  onSelect: (topic: TopicOption) => void
  onContinue: () => void
  onBack: () => void
}

export function TopicsScreen({
  selected,
  onSelect,
  onContinue,
  onBack,
}: TopicsScreenProps) {
  const { ref, fadeTop, fadeBottom } = useScrollFade([])

  const wrapClass = [
    'topics-screen__scroll',
    fadeTop ? 'topics-screen__scroll--fade-top' : '',
    fadeBottom ? 'topics-screen__scroll--fade-bottom' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="screen topics-screen">
      <div className="screen__header topics-screen__header">
        <BackButton onClick={onBack} />
        <h1 className="screen__title">
          What do you plan to use MediSearch for?
        </h1>
      </div>

      <div className={wrapClass}>
        <div
          ref={ref}
          className="topics-list"
          role="radiogroup"
          aria-label="Usage purpose"
        >
          {OPTIONS.map((option) => {
            const isSelected = selected === option.value
            return (
              <button
                key={option.value}
                type="button"
                role="radio"
                aria-checked={isSelected}
                className={`topic-option${isSelected ? ' topic-option--selected' : ''}`}
                onClick={() => onSelect(option.value)}
              >
                <span
                  className={`topic-option__radio${isSelected ? ' topic-option__radio--checked' : ''}`}
                  aria-hidden="true"
                />
                <span className="topic-option__label">{option.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="screen__footer">
        <ContinueButton onClick={onContinue} disabled={!selected} />
      </div>
    </div>
  )
}
