import { content, showLink } from '../content'
import { Section } from './Section'

export function Contact() {
  const { contactBlurb, links, labels } = content

  return (
    <Section id="contact">
      <p className="contact-blurb">{contactBlurb}</p>
      {showLink(links.email) ? (
        <div className="actions">
          <a className="btn spaced" href={`mailto:${links.email}`}>
            {labels.emailMe}
          </a>
        </div>
      ) : null}
    </Section>
  )
}
