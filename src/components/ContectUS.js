import React from 'react'
import { icon } from '../api'

const ContectUS = () => {
    return (
        <div className='w-full mb-16 mt-4'>
            <div className='container mx-auto'>
                <div className='space-y-5 mx-5'>
                    <div>
                        <h1 className='contact-heading pb-16'>Contact US</h1>
                    </div>
                    <div className='w-full border pt-10 md:pt-0 pl-4 md:pl-0 md:h-[200px] shadow-md rounded-xl space-y-6 md:flex justify-around'>
                        <div className='h-[200px] flex flex-col justify-center gap-y-4 md:gap-y-0'>
                            <h1 className='flex items-center gap-3'><span className='text-2xl text-slate-700'>E-mail:</span> <span>unibd@citechco.net</span></h1>
                            <h1 className='flex items-center gap-3'><span className='text-2xl text-slate-700'>WhatsApp: </span><span> +880 1819146823</span></h1>
                            <h1 className='flex items-center gap-3'><span className='text-2xl text-slate-700'>Address:</span> <span>59,  Motijheel Commercial Area, Ground Floor, Dhaka-1000, Bangladesh</span></h1>
                        </div>
                        <div className='flex justify-center items-center gap-10 mt-10 flex-wrap'>
                            {
                                icon.map((item) => (
                                    <div key={item.id} className='w-[65px] h-[65px] rounded-full bg-white flex justify-center items-center'>
                                        <a href={item.link} target='_blank'>{item.icons}</a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContectUS