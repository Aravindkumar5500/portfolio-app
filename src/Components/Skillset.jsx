import { useState } from 'react';
import './SkillDisplay.css';

const skillsData = [
  { title: 'HTML', percent: 95 },
  { title: 'CSS', percent: 70 },
  { title: 'JavaScrpit', percent: 90 },
  { title: 'Java', percent: 70 },
  { title: 'ReactJs', percent: 80 },
  { title: 'Bootstrap', percent: 65 },
  { title: 'Node', percent: 75 },
  { title: 'Express', percent: 70 },
  { title: 'MongoDB', percent: 60 },
  { title: 'MySQL', percent: 50 },
  { title: 'Git', percent: 80 },
  { title: 'Spring Boot', percent: 60 },
];

const SkillDisplay = () => {
  const [currentSkill, setCurrentSkill] = useState(skillsData[0]);
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (currentSkill.percent / 100) * circumference;

  return (
    <main className="skill-main">
      <section className="skill-section">
        <div className="button-grid">
          {skillsData.map((skill, index) => (
            <button
              key={index}
              className={`skill-button${currentSkill.title === skill.title ? ' active' : ''}`}
              onClick={() => setCurrentSkill(skill)}
            >
              {skill.title}
            </button>
          ))}
        </div>

        <div className="circle-container">
          <svg className="progress-ring" viewBox="0 0 290 290">
            <circle
              cx="145"
              cy="145"
              r={radius}
              strokeWidth="30"
              fill="transparent"
              className="circle-background"
            />
            <circle
              cx="145"
              cy="145"
              r={radius}
              strokeWidth="30"
              fill="transparent"
              className="circle-progress"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>
          <span className="percent-text">{currentSkill.percent}%</span>
        </div>
      </section>
    </main>
  );
};

export default SkillDisplay;