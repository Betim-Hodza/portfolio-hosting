import React from 'react'
import ProjectItem from './ProjectItem'
import Project1 from '../assets/react.svg' //(doesnt exist yet but will whenever i have images for now svg filler)
import Project2 from '../assets/react.svg' //(doesnt exist yet but will whenever i have images for now svg filler)
import Project3 from '../assets/react.svg' //(doesnt exist yet but will whenever i have images for now svg filler)
import Project4 from '../assets/react.svg' //(doesnt exist yet but will whenever i have images for now svg filler)

const Projects = () => {
    return(
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>Filler Filler Filler Filler Blah BlahBlahBlah
            BlahBlahBlahBlah BlahBlahBlah Blah Blah Blah
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={Project1} title='Project #1' />
                <ProjectItem img={Project2} title='Project #2' />
                <ProjectItem img={Project3} title='Project #3' />
                <ProjectItem img={Project4} title='Project #4' />
            </div>
        </div>
    )
}

export default Projects