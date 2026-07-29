import { ContinueButton } from '../components/ContinueButton'
import './WelcomeScreen.css'

type WelcomeScreenProps = {
  onContinue: () => void
}

export function WelcomeScreen({ onContinue }: WelcomeScreenProps) {
  return (
    <div className="screen welcome-screen">
      <div className="welcome-screen__content">
        <div className="welcome-screen__logo" aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="14" fill="currentColor" />
            <path
              d="M24 14v20M14 24h20"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="welcome-screen__eyebrow">Welcome to</p>
        <h1 className="welcome-screen__title">MediSearch</h1>
        <p className="welcome-screen__subtitle">
          Science-based answers to medical questions
        </p>
      </div>
      <div className="screen__footer">
        <ContinueButton onClick={onContinue} />
      </div>
    </div>
  )
}
