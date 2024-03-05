import React from 'react'
import ProjectItem from './ProjectItem'
import Project1 from '../assets/Connect For Java.gif' //(doesnt exist yet but will whenever i have images for now svg filler)
import Project2 from '../assets/portfolio-hosting.gif' //(doesnt exist yet but will whenever i have images for now svg filler)
import Project3 from '../assets/Movie Theater Management System.gif' //(doesnt exist yet but will whenever i have images for now svg filler)
import Project4 from '../assets/CSEC-CTF.gif' //(doesnt exist yet but will whenever i have images for now svg filler)

const Projects = () => {
    return(
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#53306b]'>Projects</h1>
            <p className='text-center py-8 text-xl'>Take a look at some of my project I've worked on!</p>
            <div className='grid sm:grid-cols-2 gap-12 text-black'>
                <ProjectItem img={Project1} title='Connect For Java' desc='The Super fun board game!' link='https://github.com/Betim-Hodza/ConnectForJava' />
                <ProjectItem img={Project2} title='Portfolio Hosting ' desc='I feel like im having deja vu' link='https://github.com/Betim-Hodza/portfolio-hosting' />
                <ProjectItem img={Project3} title='Movie Theatre Management System' desc='Ill be seeing you, mr Wick.' link='https://github.com/Betim-Hodza/Movie-Theater-Management-System' />
                <ProjectItem img={Project4} title='CSEC-CTF-Notes' desc='Notes repository website!' link='https://github.com/Betim-Hodza/CSEC-CTF-REP' />
            </div>
        </div>
    )
}

export default Projects