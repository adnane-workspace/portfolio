import React from 'react';

const sampleProjects = [
  { id: 1, title: 'Project One', desc: 'Short description of project one.' },
  { id: 2, title: 'Project Two', desc: 'Short description of project two.' },
  { id: 3, title: 'Project Three', desc: 'Short description of project three.' },
];

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {sampleProjects.map((p) => (
            <article key={p.id} className="project-card">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
