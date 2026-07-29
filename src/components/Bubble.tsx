import './Bubble.css'

type BubbleProps = {
  label: string
  selected: boolean
  onToggle: () => void
}

export function Bubble({ label, selected, onToggle }: BubbleProps) {
  return (
    <button
      type="button"
      className={`bubble${selected ? ' bubble--selected' : ''}`}
      onClick={onToggle}
      aria-pressed={selected}
    >
      {label}
    </button>
  )
}
