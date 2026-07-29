import './ContinueButton.css'

type ContinueButtonProps = {
  onClick: () => void
  disabled?: boolean
  label?: string
}

export function ContinueButton({
  onClick,
  disabled = false,
  label = 'Continue',
}: ContinueButtonProps) {
  return (
    <button
      type="button"
      className="continue-button"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}
