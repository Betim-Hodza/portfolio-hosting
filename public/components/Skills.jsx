import React from 'react'
import { FaCode } from "react-icons/fa"

const [activeSection, setActiveSection] = useState("skills");
const data = {
  languages: ["C/C++", "Java", "Python", "React"],
  tools: ["gcc/g++", "gdb", "git/github", "bash"],
  os: ["Windows", "macOS", "Linux"],
};


const Skills = () => {
  return (
    <div>
      <h1>Skills</h1>
       
        <button></button>
        <button></button>
        <button></button>
    </div>
  )
}

export default Skills