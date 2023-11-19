import React from 'react'
import { category } from '../api'

const Category = () => {
    return (
        <div className='w-full lg:h-[460px] bg-[#eaeaec] py-11'>
                <div className='container mx-auto'>
                    <div className='space-y-4'>
                        <div className='pt-7 pb-4'>
                            <p className='site-text-h1 text-center md:text-start text-slate-700'>Featured Products Category</p>
                        </div>
                        <div className='flex justify-center sm:justify-between flex-wrap'>
                            {
                                category.map((item) => (
                                    <div key={item.id} className=''>
                                        <img src={item.image} alt={item.tittle} className='w-[290px] h-[217px]' />
                                        <div>
                                            <p className='text-center pt-3'>{item.tittle}</p>
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

export default Category