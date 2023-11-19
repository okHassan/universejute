import React from 'react'
import { icon } from '../api'

const Link = () => {
    return (
        <div className='link-background'>
            <div className='container mx-auto'>
                <div className='h-[700px] flex flex-col justify-center items-center'>
                    <div className='text-center'>
                        <h1 className='link-p pb-5'>
                            LIKE, SHARE, REPEAT
                        </h1>
                        <h1 className='lint-heading'>
                            Connect with us!
                        </h1>
                    </div>
                    <div className='flex justify-center gap-10 mt-10 flex-wrap'>
                        {
                            icon.map((item) => (
                                <div key={item.id} className='w-[65px] h-[65px] rounded-full bg-white flex justify-center items-center'>
                                    <a href='https://google.com'>{item.icons}</a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Link