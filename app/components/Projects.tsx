import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-card">
        <Image src="/Calculator.jpeg" alt="Clculator" width={100} height={100} />
        <h3> Calculator</h3>
        <p>An interactive calculator built with HTML,CSS and JavaScript</p>
        <a href="https://web-calculator-git-main-hinarafiqs-projects.vercel.app/" target="_blank" className="project-link">View Project</a>
      </div>
      <div className="project-card">
        <Image src="/Application Form.jpeg" alt="Application Form" width={100} height={100} />
        <h3>Application Form</h3>
        <p>An application form made with HTML.</p>
        <a href="https://application-form-git-main-hinarafiqs-projects.vercel.app/" target="_blank" className="project-link">View Project</a>
      </div>
    </section>
  );
}