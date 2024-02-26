import React from 'react'

const Workitem = ({year, title, duration, details}) => {
    return (
        <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
            <li className='mb-10 ml-4'>
                <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>
                <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-sm md:text=sm'>
                    <span className='inline-block px-4 py-1 font-semibold text-white bg-[#59227e] rounded-md'>{year}</span>
                    <span className='text-lg font-semibold text-[#59227e]'>{title}</span>
                    <span className='my-1 text-sm font-normal leading-none text-stone-400'>{duration}</span>
                </p>
                <p className='details ul mb-2 text-base font-normal text-stone500'>
                    {details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </p>
            </li>
        </ol>
    )
}

export default Workitem