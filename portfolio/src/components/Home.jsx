import React from 'react'
import "../phstyle.css"
import HeroImage from '../assets/heroImage.jpg'
import { RiArrowRightSLine } from 'react-icons/ri'
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

                <div className='flex flex-col h-full justify-center'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>I am a Competitive Programmer</h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I am having an 1.5 years of an in Competitve programming.
                        Currently I am leaning Dynamic Programming in language like C++.
                    </p>

                    <div>
                        <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <RiArrowRightSLine size={25} className="ml-1"/>
                            </span>

                        </Link>
                    </div>
                </div>

                <div>
                    <img src={HeroImage} alt="my profile" className='photo rounded-2xl mx-auto w-2/3 md:w-full' />
                </div>
            </div>
        </div>
    )
}

export default Home