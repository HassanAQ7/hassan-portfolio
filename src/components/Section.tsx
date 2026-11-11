import type { ReactNode } from 'react'
import { content, type SectionId } from '../content'

/** One faint character cropped off the right edge of each band. */
const BACKDROP: Record<SectionId, string> = {
  projects: '物',
  skills: '技',
  education: '学',
  contact: '話',
}

const TONE: Record<SectionId, string> = {
  projects: 'band band-paper band-light',
  skills: 'band band-red band-dark',
  education: 'band band-black band-dark',
  contact: 'band band-orange band-light',
}

type Props = {
  id: SectionId
  children: ReactNode
}

/** A full-width flat band: vertical label, one backdrop character, then the text. */
export function Section({ id, children }: Props) {
  const { title, kanji } = content.sections[id]

  return (
    <section id={id} className={TONE[id]} aria-labelledby={`${id}-title`}>
      <p className="tategaki" lang="ja" aria-hidden="true">
        {kanji}
      </p>
      <p className="bg-kanji" lang="ja" aria-hidden="true">
        {BACKDROP[id]}
      </p>
      <div className="band-inner">
        <h2 id={`${id}-title`} className="section-title">
          {title}
        </h2>
        <p className="bracket" lang="ja">
          ［{kanji}］
        </p>
        {children}
      </div>
    </section>
  )
}
