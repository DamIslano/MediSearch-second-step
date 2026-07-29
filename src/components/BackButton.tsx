import './BackButton.css'

type BackButtonProps = {
  onClick: () => void
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      type="button"
      className="back-button"
      onClick={onClick}
      aria-label="Go back"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12.5 4.5L7 10l5.5 5.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
