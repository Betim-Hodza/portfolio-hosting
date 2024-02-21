import React from 'react'
import Workitem from './Workitem'

const data = [
    {
        year: 2024,
        title: 'CyberSecurity Club UTA | MemberShip Officer',
        duration: '2023-Prsent',
        details:[
            '- Contributed to the NCL Red Cats achievement of a high national ranking in the NCL Fall game 2023 and NCL Spring game 2024.',
            '- Planned and presented workshops/activities, including CTFS and Network Security, boosting problem-solving skills through real-world challenges.',
          ],
    },
    {
        year: 2023,
        title: 'UTA Red Cats | NCL Team Games',
        duration: 'Fall 2023',
        details:  [
            '- One of the highest ranking teams in NCL',
            '- Top 3%, 98th National Percentile',
            '- Placed 111 out of 4672 National Rank',
            '- 1455/3000 Points Total',
          ],
    },
    /*
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
    
    */
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