import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaGithubAlt, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Main = () =>{
    return(
        <div id='main'>
            <img className='w-full h-screen object-cover object-left' src="src/assets/anas-alshanti-feXpdV001o4-unsplash.jpg" alt="" />
            <div className='w-full h-screen absolute top-0 left-0 bg-slate-600/25'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-white'>Hi, my name is Betim Hodza</h1>
                    <h2 className='flex snLtext-4xl text-3xl pt-4 text-white'>I'm a 
                        <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'CS Student',
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            'CyberSecurity Enthusiest',
                            2000,
                            'Developer',
                            2000
                        ]}
                        wrapper="div"
                        speed={30}
                        repeat={Infinity}
                        style={{ fontSize: '1em', paddingLeft: '5px'}}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        
                        <FaGithubAlt className='cursor-pointer ' size={20} color='white'/>
                        <FaLinkedin className='cursor-pointer' size={20} color='white'/>
                        <FaInstagram className='cursor-pointer' size={20} color='white'/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main