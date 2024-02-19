import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaGithubAlt, FaInstagram, FaLinkedin} from 'react-icons/fa'
import { SiCyberdefenders } from "react-icons/si"

const Main = () =>{
    return(
        <div id='main'>
            <img className='w-full h-screen object-cover object-left' src="https://images.unsplash.com/photo-1480506132288-68f7705954bd?q=80&w=1840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" />
            <div className='w-full h-screen absolute top-0 left-0 bg-slate-600/25'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-white'>Hi, I'm Betim Hodza</h1>
                    <h2 className='flex snLtext-4xl text-3xl pt-4 text-white'>I'm a 
                        <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'CS Student',
                            2000, // wait 2s before replacing
                            'CyberSecurity Enthusiast',
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
                        <a href="https://github.com/Betim-Hodza">
                            <FaGithubAlt className='cursor-pointer ' size={20} color='white'/>
                        </a>
                        <a href="https://www.linkedin.com/in/betim-hodza-17bb46253/">
                            <FaLinkedin className='cursor-pointer' size={20} color='white'/>
                        </a>
                        <a href="https://cyberskyline.com/report/FHKXJJX4J74R">
                            <SiCyberdefenders className='cursor-pointer' size={20} color='white'/>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main