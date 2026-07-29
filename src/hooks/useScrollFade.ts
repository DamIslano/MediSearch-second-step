import { useCallback, useEffect, useRef, useState } from 'react'

const EPSILON = 1

export function useScrollFade(deps: unknown[] = []) {
  const ref = useRef<HTMLDivElement>(null)
  const [fadeTop, setFadeTop] = useState(false)
  const [fadeBottom, setFadeBottom] = useState(false)
  const depsKey = JSON.stringify(deps)

  const update = useCallback(() => {
    const el = ref.current
    if (!el) {
      setFadeTop(false)
      setFadeBottom(false)
      return
    }

    const { scrollTop, scrollHeight, clientHeight } = el
    const canScroll = scrollHeight > clientHeight + EPSILON

    setFadeTop(canScroll && scrollTop > EPSILON)
    setFadeBottom(
      canScroll && scrollTop + clientHeight < scrollHeight - EPSILON,
    )
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const frame = requestAnimationFrame(update)
    el.addEventListener('scroll', update, { passive: true })

    const observer = new ResizeObserver(update)
    observer.observe(el)

    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener('scroll', update)
      observer.disconnect()
    }
  }, [update, depsKey])

  return { ref, fadeTop, fadeBottom }
}
