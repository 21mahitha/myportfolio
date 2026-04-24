import React from 'react';
import './Projects.css';

const PROJECTS = [
  {
    id: 1,
    title: 'Hybrid Predictive Maintenance',
    description:
      'Built an ML pipeline to predict engine health using the NASA CMAPSS dataset. Applied clustering, classification, and regression for failure prediction and improved maintenance decision-making using a risk scoring system.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'VS Code'],
    period: 'May – June 2025',
    githubUrl: 'https://github.com/mahi21tha',
    liveUrl: '',
  },
  {
    id: 2,
    title: 'Sepsis Prediction using Deep Learning',
    description:
      'Developed a deep learning model to predict early onset of sepsis using patient vital signs and clinical parameters. Handled class imbalance and evaluated using Accuracy, Precision, Recall, F1-score, and ROC-AUC.',
    tech: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Scikit-learn'],
    period: 'Nov 2025 – Jan 2026',
    githubUrl: 'https://github.com/mahi21tha',
    liveUrl: '',
  },
  {
    id: 3,
    title: 'Credit Card Fraud Detection',
    description:
      'Built a deep neural network to detect fraudulent transactions from highly imbalanced financial datasets. Applied resampling techniques and optimized for high recall to minimize false negatives in fraud detection.',
    tech: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'Scikit-learn'],
    period: 'July 2025',
    githubUrl: 'https://github.com/mahi21tha',
    liveUrl: '',
  },
];

const EXPERIENCE = [
  {
    role: 'ML Intern',
    org: 'ElectroWiz / IIT Hyderabad',
    period: 'Oct 2025 – Present',
    points: [
      'Built ML pipelines using Python and Scikit-learn for real-world datasets',
      'Performed data preprocessing, feature engineering, and model tuning',
      'Improved model performance using hyperparameter optimization',
    ],
  },
  {
    role: 'Member',
    org: 'Math Club · Mahindra University',
    period: 'Sept 2025 – Present',
    points: ['Active participant in subject-group activities and discussions'],
  },
];

function ProjectCard({ project, index }) {
  return (
    <article className="project-card fade-up" style={{ animationDelay: `${index * 0.12}s` }}>
      <div className="project-header">
        <span className="project-number">0{project.id}</span>
        <div>
          <h3 className="project-title">{project.title}</h3>
          <span className="project-period">{project.period}</span>
        </div>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-tech">
        {project.tech.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
      </div>
      <div className="project-links">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-btn primary">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.24-.01-2.25-3.34.73-4.04-1.41-4.04-1.41-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          View on GitHub
        </a>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <div className="projects-page">
      <div className="container">

        <header className="page-header fade-up">
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">Things I've built</p>
        </header>

        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* EXPERIENCE SECTION */}
        <section className="exp-section fade-up">
          <h2 className="section-title" style={{ marginTop: '3rem' }}>Experience</h2>
          <div className="exp-list">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="exp-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-org">{exp.org}</p>
                  </div>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <ul className="exp-points">
                  {exp.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default Projects;
