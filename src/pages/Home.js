import React from 'react';
import './Home.css';

const ME = {
  name: 'Mahitha ',
  personalEmail: 'kypu.mahitha@gmail.com',
  github: 'https://github.com/21mahitha',
  linkedin: 'https://linkedin.com/in/kypu',
  skills: [
    'Python', 'Java', 'C',
    'Data Structures', 'OOP',
    'Scikit-learn', 'TensorFlow', 'Keras',
    'NumPy', 'Pandas', 'Git & GitHub', 'VS Code',
  ],
  about: `I'm a Computer Science student at Mahindra University with a GPA of 8.85/10, passionate about
AI/ML and building intelligent systems. I enjoy working on real-world data problems — from predictive
maintenance to fraud detection — and am currently interning at ElectroWiz/IIT Hyderabad building ML
pipelines. Outside tech, I love running, badminton, and reading books.`,
  researchInterests: [
    'Machine Learning & Deep Learning',
    'Predictive Analytics & Healthcare AI',
    'Computational Finance',
    'Data Structures & Algorithms',
  ],
  education: [
    { degree: 'B.Tech. Computer Science', institute: 'Mahindra University', year: 'Aug 2023 – Present', detail: 'GPA: 8.85 / 10.0 · Academic Scholarship 2023–26' },
    { degree: 'High School', institute: 'FIITJEE', year: 'June 2023', detail: 'Percentage: 93.4%' },
  ],
  profilePic: `${process.env.PUBLIC_URL}/profile.jpg`,
};

function Home() {
  return (
    <div className="home">
      <div className="container">

        <section className="hero fade-up">
          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">{ME.name}</h1>
            <p className="hero-tagline">ML Engineer · CS Student · Problem Solver</p>
            <div className="hero-social">
              <a href={ME.github} target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.24-.01-2.25-3.34.73-4.04-1.41-4.04-1.41-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href={ME.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a href={`mailto:${ME.personalEmail}`} className="social-link">✉ Email</a>
            </div>
          </div>
          <div className="hero-avatar">
            <img src={ME.profilePic} alt={ME.name} className="avatar-img" />
            <div className="avatar-ring" />
          </div>
        </section>

        <section className="card fade-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="section-title">About Me</h2>
          <p className="about-text">{ME.about}</p>
        </section>

        <section className="card fade-up" style={{ animationDelay: '0.15s' }}>
          <h2 className="section-title">Education</h2>
          <div className="edu-list">
            {ME.education.map((e, i) => (
              <div key={i} className="edu-item">
                <div className="edu-dot" />
                <div className="edu-body">
                  <p className="edu-degree">{e.degree}</p>
                  <p className="edu-institute">{e.institute} · {e.year}</p>
                  <p className="edu-detail">{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="card fade-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="section-title">Research Interests</h2>
          <ul className="interest-list">
            {ME.researchInterests.map((interest, i) => (
              <li key={i} className="interest-item">
                <span className="interest-dot" />
                {interest}
              </li>
            ))}
          </ul>
        </section>

        <section className="card fade-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {ME.skills.map((skill, i) => (
              <span key={i} className="skill-badge">{skill}</span>
            ))}
          </div>
        </section>

        <section className="card fade-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="section-title">Personal Details</h2>
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Name</span>
              <span className="detail-value">{ME.name}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email</span>
              <a href={`mailto:${ME.personalEmail}`} className="detail-link">{ME.personalEmail}</a>
            </div>
            <div className="detail-item">
              <span className="detail-label">GitHub</span>
              <a href={ME.github} target="_blank" rel="noopener noreferrer" className="detail-link">github.com/mahi21tha</a>
            </div>
            <div className="detail-item">
              <span className="detail-label">LinkedIn</span>
              <a href={ME.linkedin} target="_blank" rel="noopener noreferrer" className="detail-link">linkedin.com/in/kypu</a>
            </div>
            <div className="detail-item">
              <span className="detail-label">Hobbies</span>
              <span className="detail-value">Running · Badminton · Reading</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Home;
