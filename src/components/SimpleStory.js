import React from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';


const SimpleStory = () => {
    return (
        <div className='w-full h-[1000px] lg:h-[750px] bg-[#12373a] pt-7 lg:pt-0'>
            <div className='container mx-auto'>
                <div className='h-[750px] flex mx-6 md:mx-0 justify-between items-center flex-col lg:flex-row'>
                    <Fade left>
                        <div>
                            <img src='/images/story.jpg' alt='story' className='w-full h-[530px] rounded-3xl' />
                        </div>
                    </Fade>
                    <Fade right>
                        <div className='sm:w-[400px] flex flex-col items-center px-6 md:px-0'>
                            <h1 className='story-text-h1 text-center'>Our Story</h1>
                            <p className='text-center text-white mb-10 mt-4'>Our bespoke service ensures that whatever size and whatever colour jute bags you need, we can make it happen.</p>
                            <Link to='/about' className='button w-[262px] text-center cursor-pointer'>Read the full story</Link>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default SimpleStory