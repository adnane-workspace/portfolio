import React from 'react';

const skills = ['JavaScript', 'React', 'Node.js', 'TypeScript', 'Testing', 'CI/CD'];

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
