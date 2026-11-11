import { content, showLink } from '../content'
import { Section } from './Section'

export function Projects() {
  const { projects, labels } = content

  return (
    <Section id="projects">
      <ul className="projects">
        {projects.map((project) => (
          <li key={project.title} className="project">
            <p className="project-context">{project.context}</p>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-meta">
              <span>{project.date}</span>
              <span className="project-stack">{project.stack}</span>
            </p>
            <ul className="project-points">
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            {showLink(project.demo) || showLink(project.devpost) || showLink(project.github) ? (
              <div className="actions">
                {showLink(project.demo) ? (
                  <a className="btn spaced" href={project.demo} target="_blank" rel="noreferrer">
                    {labels.liveDemo}
                  </a>
                ) : null}
                {showLink(project.devpost) ? (
                  <a className="btn spaced" href={project.devpost} target="_blank" rel="noreferrer">
                    {labels.devpost}
                  </a>
                ) : null}
                {showLink(project.github) ? (
                  <a className="btn spaced" href={project.github} target="_blank" rel="noreferrer">
                    {labels.source}
                  </a>
                ) : null}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  )
}
