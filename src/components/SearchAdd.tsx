import { useState, type FormEvent, type KeyboardEvent } from 'react'
import './SearchAdd.css'

export const CUSTOM_TOPIC_MAX_LENGTH = 112

type SearchAddProps = {
  onAdd: (value: string) => boolean
}

export function SearchAdd({ onAdd }: SearchAddProps) {
  const [value, setValue] = useState('')

  const submit = () => {
    const trimmed = value.trim().slice(0, CUSTOM_TOPIC_MAX_LENGTH)
    if (!trimmed) return
    const added = onAdd(trimmed)
    if (added) setValue('')
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    submit()
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      submit()
    }
  }

  return (
    <form className="search-add" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-add__input"
        placeholder="Anything else?"
        value={value}
        maxLength={CUSTOM_TOPIC_MAX_LENGTH}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        enterKeyHint="done"
        autoComplete="off"
        aria-label="Add a custom topic"
      />
      <button
        type="submit"
        className="search-add__button"
        disabled={!value.trim()}
      >
        Add
      </button>
    </form>
  )
}
