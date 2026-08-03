import { BackButton } from '../components/BackButton'
import { Bubble } from '../components/Bubble'
import { ContinueButton } from '../components/ContinueButton'
import { SearchAdd } from '../components/SearchAdd'
import './SubtopicsScreen.css'

type SubtopicsScreenProps = {
  title: string
  options: readonly string[]
  selected: string[]
  onToggle: (topic: string) => void
  onAdd: (topic: string) => boolean
  onContinue: () => void
  onBack: () => void
}

export function SubtopicsScreen({
  title,
  options,
  selected,
  onToggle,
  onAdd,
  onContinue,
  onBack,
}: SubtopicsScreenProps) {
  const customTopics = selected.filter(
    (item) =>
      !options.some((option) => option.toLowerCase() === item.toLowerCase()),
  )

  const allBubbles = [...options, ...customTopics]

  return (
    <div className="screen subtopics-screen">
      <div className="screen__header subtopics-screen__header">
        <BackButton onClick={onBack} />
        <h1 className="screen__title">{title}</h1>
      </div>

      <div
        className="subtopics-screen__bubbles"
        role="group"
        aria-label="Topics of interest"
      >
        {allBubbles.map((topic) => (
          <Bubble
            key={topic}
            label={topic}
            selected={selected.some(
              (item) => item.toLowerCase() === topic.toLowerCase(),
            )}
            onToggle={() => onToggle(topic)}
          />
        ))}
      </div>

      <div className="screen__footer subtopics-screen__footer">
        <SearchAdd onAdd={onAdd} />
        <ContinueButton onClick={onContinue} />
      </div>
    </div>
  )
}
