import React from 'react'
import Workitem from './Workitem'

const data = [
    {
        year: 2024,
        title: 'CyberSecurity Club UTA | MemberShip Officer',
        duration: '2 years',
        details:'blah blah blah blah blah blah blah blah blah '
    },
    {
        year: 2024,
        title: 'MemberShip Officer',
        duration: '2 years',
        details: 'blah blah blah blah blah blah blah blah blah '
    },
    {
        year: 2024,
        title: 'MemberShip Officer',
        duration: '2 years',
        details: 'blah blah blah blah blah blah blah blah blah '
    },
    {
        year: 2024,
        title: 'MemberShip Officer',
        duration: '2 years',
        details: 'blah blah blah blah blah blah blah blah blah '
    },
]

const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='py-8 text-4xl font-bold text-center text-[#53306b]'>Experience</h1>
            {data.map((item, idx)=>(
                <Workitem 
                key={idx} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                details={item.details} 
                />
            ))}
        </div>
    )
}

export default Work