import React from 'react'
import anyimg from "../images/profile_img.jpg";
import { Link } from "react-scroll";

import { MdKeyboardArrowRight } from "react-icons/md";


const Home = () => {
        return (
                <>
                    <div name="home" className='h-screen w-full
                    bg-gradient-to-b from-black via-black to-gray-800 text-white '>
        
                        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row  '>
        
                            <div className='flex flex-col justify-center h-full'>

                        <h1 className='text-4xl sm:text-7xl font-bold text-white mt-20 '>I'm a Tech Explorer</h1>

                        <p className='text-gray-400 py-4  max-w-md'>
                        An enthusiastic learner and aspiring technologist.With a passion for technology.I am constantly exploring these technologies to enhance my skills and expand my horizons.</p>

                        <div >

                            <Link to="portfolio" smooth duration={500} className='group text-white  w-fit px-6 py-3  my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                                Portfolio

                                <span className='group-hover:rotate-90 duration-300'>
                                    <MdKeyboardArrowRight size={23} className='ml-1' />
                                </span>
                            </Link>

                        </div>
                    </div>

                    <div>
                        <img src={anyimg} alt="myprofile" className='rounded-2xl mx-auto w-3/5  md:full' />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home;




