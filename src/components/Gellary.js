import React from 'react'
import Gallery from 'react-photo-gallery'
import { gellary } from '../api'

const Gellary = () => {
    return (
        <div className='w-full h-full mt-12'>
            <div className='container mx-auto'>
            <h1 className='product-heading pb-16'>Gallery</h1>
                <div className='flex justify-between items-center'>
                    <div className='w-[400px] mx-5'>
                        <h1 className='sacrament pb-4'>Our Production & Shipment</h1>
                        <h1 className='playfar pb-5'>Portfolio</h1>
                        <h3 className='gallery-nuni-text pb-5'>Why you will love Our Bangladesh Jute Bag?</h3>
                        <p className='text-start text-slate-800 mb-10 mt-4 leading-8'>We have a great team with high skill of work in their own creativity. A highly skilled team can only satisfy the client by delivering their merit to the project. </p>
                    </div>
                    <div className='hidden sm:block w-[850px]'>
                        <Gallery photos={gellary} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gellary