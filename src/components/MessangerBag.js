import React from 'react'
import { MessengerBags } from '../api'

const MessangerBag = () => {
    return (
        <div className='bg-[#12373a] w-full h-auto pb-10'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-10'>
                    <div className='mt-14 mb-10'>
                        <h1 className='m-product-heading'>Messenger Bags</h1>
                    </div>
                    <div className='flex flex-wrap'>
                        {
                            MessengerBags.map((item) => (
                                <div key={item.image} class="p-4 lg:w-1/2 md:w-full">
                                    <div class="flex items-center rounded-lg bg-[#0b384c] p-8 sm:flex-row flex-col">
                                        <div class="w-[180px] h-[180px] sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                            <img src={item.image} alt={item.id} className='rounded-lg' />
                                        </div>
                                        <div class="flex-grow">
                                            <h2 class="text-gray-200 text-lg title-font font-medium mb-3">{item.tittle}</h2>
                                            <p class="leading-relaxed text-base">Item Code: {item.code}</p>
                                            <a class="button-no-2 flex items-center mt-6">Learn More
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
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

export default MessangerBag