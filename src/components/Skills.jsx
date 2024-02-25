import React, { useState } from 'react';
import { FaCode, FaTools, FaLaptopCode } from 'react-icons/fa';

const data = {
  languages: {
    title: 'Languages:',
    skills: ['C/C++', 'Java', 'Python', 'React', 'Tailwind CSS', 'JavaScript'],
    icon: <FaCode />,
  },
  tools: {
    title: 'Tools:',
    skills: ['Gcc/G++', 'linux', 'gdb', 'git/github', 'bash', 'github pages', 'make', 'valgrind', 'Wireshark'],
    icon: <FaTools />,
  },
  csec: {
    title: 'Cyber Security:',
    skills: [ 'OSINT', 'Network Traffic Analysis', 'Cryptography', 'Log Analysis', 'Password Cracking'],
    icon: <FaLaptopCode />,
  },
};

const Skills = () => {
  const [activeSection, setActiveSection] = useState(null); // Initially, no section is active

  const handleClick = (sectionName) => {
    setActiveSection(sectionName === activeSection ? null : sectionName);
  };

  return (
    <div className="skills-section">
      <h1 className="text-4xl font-bold text-center text-[#53306b]">Skills</h1>
      <div className="skill-buttons text-center">
        {Object.keys(data).map((sectionName) => (
          <button
            key={sectionName}
            onClick={() => handleClick(sectionName)}
            className={`skill-button rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300 ${
              activeSection === sectionName ? 'active' : ''
            }`}
          >
            {data[sectionName].icon}
          </button>
        ))}
      </div>
      <div className="skill-details max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        {activeSection && (
          <div className="skill-group active">
            <h2 className='text-lg font-semibold text-[#59227e]'>{data[activeSection].title}</h2>
            <ul className='details ul mb-2 text-base font-normal text-stone500'>
              {data[activeSection].skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
