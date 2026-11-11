import { content } from '../content'
import { Section } from './Section'

export function Education() {
  const { education, labels } = content

  return (
    <Section id="education">
      <h3 className="education-school">{education.school}</h3>
      <p>{education.location}</p>
      <p>{education.degree}</p>
      <p>{education.dates}</p>
      <p className="coursework">
        <span>{labels.coursework}</span> {education.coursework.join('; ')}
      </p>
    </Section>
  )
}
