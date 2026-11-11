import { content } from '../content'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills">
      <dl className="skills">
        {content.skills.map((group) => (
          <div key={group.label}>
            <dt>{group.label}:</dt> <dd>{group.items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
