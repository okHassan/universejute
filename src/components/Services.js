import React from 'react'
import { Service } from '../api'

const Services = () => {
    return (
        <div className='w-full mb-16 mt-14 h-[850px] lg:h-[750px] bg-[#eaeaec] pt-10'>
        <div className='container mx-auto'>
            <div className='space-y-10'>
                <div  className=''>
                    <p className='text-center tracking-[1.7em] pb-2'>FOCUS ON</p>
                    {/* <h1 className='product-heading pb-4'>Our Services</h1> */}
                </div>
                <div className='h-[400px] flex justify-center items-center flex-wrap gap-12'>
                    {
                        Service.map((item) => (
                            <div key={item.id} className={`w-[550px] flex mx-5 md:mx-0 justify-between items-center gap-5 ${item.border === 1 ? 'jj' : 'services-box h-[400px] lg:h-[300px]'}`}>
                                <div className='text-right'>
                                    <h1 className='services-h1'>{item.tittle}</h1>
                                    <p className='services-p'>{item.discription}</p>
                                </div>
                                <div>
                                <img src={item.image} alt={item.tittle} className='w-[900px]' />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

export default Services