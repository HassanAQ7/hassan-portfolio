import { useEffect, useState } from 'react'
import { content } from '../content'

const CARD_MS = 800

function prefersReducedMotion(): boolean {
  return (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

type Card = 'name' | 'word' | null

/** Two title cards on every load. Hard cuts, any click or key skips. */
export function TitleCards() {
  const [card, setCard] = useState<Card>(() => (prefersReducedMotion() ? null : 'name'))
  const showing = card !== null

  useEffect(() => {
    if (card === null) return
    const id = window.setTimeout(() => setCard(card === 'name' ? 'word' : null), CARD_MS)
    return () => window.clearTimeout(id)
  }, [card])

  useEffect(() => {
    if (!showing) return
    const skip = (event: Event) => {
      if (event instanceof KeyboardEvent && event.key === ' ') event.preventDefault()
      setCard(null)
    }
    window.addEventListener('keydown', skip)
    window.addEventListener('pointerdown', skip)
    return () => {
      window.removeEventListener('keydown', skip)
      window.removeEventListener('pointerdown', skip)
    }
  }, [showing])

  if (card === null) return null

  const { titleCards } = content
  return (
    <div className={card === 'name' ? 'title-card' : 'title-card title-card-black'} aria-hidden="true">
      {card === 'name' ? (
        <div>
          <p className="title-card-name">{titleCards.name}</p>
          <p className="title-card-japanese" lang="ja">
            {titleCards.japanese}
          </p>
        </div>
      ) : (
        <>
          <p className="title-card-word spaced">{titleCards.word}</p>
          <p className="title-card-footer spaced">{titleCards.footer}</p>
        </>
      )}
    </div>
  )
}
