import { content, showLink, type SectionId } from '../content'
import { PowerLines } from './PowerLines'

const NAV: SectionId[] = ['projects', 'skills', 'education', 'contact']

export function Hero() {
  const { name, romaji, summary, links, labels, sections } = content

  return (
    <header className="hero band-dark">
      <nav aria-label={labels.nav} className="nav">
        {NAV.map((id) => (
          <a key={id} href={`#${id}`}>
            {sections[id].title}
          </a>
        ))}
      </nav>

      <div className="hero-copy">
        <p className="romaji" aria-hidden="true">
          {romaji.map((syllable) => (
            <span key={syllable}>{syllable}</span>
          ))}
        </p>
        <h1 className="hero-name">
          <span className="logo-squeeze">{name}</span>
        </h1>
        <p className="bracket" lang="ja">
          ［ハッサン］
        </p>
        <p className="hero-summary">{summary}</p>
        <div className="actions">
          {showLink(links.github) ? (
            <a className="btn spaced" href={links.github} target="_blank" rel="noreferrer">
              {labels.github}
            </a>
          ) : null}
          {showLink(links.linkedin) ? (
            <a className="btn spaced" href={links.linkedin} target="_blank" rel="noreferrer">
              {labels.linkedin}
            </a>
          ) : null}
          {showLink(links.email) ? (
            <a className="btn spaced" href={`mailto:${links.email}`}>
              {labels.email}
            </a>
          ) : null}
          {showLink(links.resume) ? (
            <a className="btn spaced" href={links.resume} target="_blank" rel="noreferrer">
              {labels.resume}
            </a>
          ) : null}
        </div>
      </div>

      <PowerLines />
    </header>
  )
}
