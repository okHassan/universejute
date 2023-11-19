import React from 'react'

const Shipment = () => {
    return (
        <React.Fragment>
            <div className='w-full h-[300px] sm:h-[212px] flex flex-col justify-center items-center gap-3 bg-[#b8c1d0]'>
                <p className='text-center tracking-[1.5em] pb-2'>DEDIGATED ON</p>
                <h1 className='product-heading pb-4'>Fast Shipment</h1>
            </div>
            <div className='vessel-background'>
                <div className='container mx-auto'>
                    <div className='flex justify-start items-center h-[900px]'>
                        <div className='bg-[#122a358c] w-[450px] h-[500px] mx-5 sm:mx-0 sm:ml-14'>
                            <div className='h-[500px] flex flex-col justify-center items-center text-center'>
                                <h1 className='pb-5 text-[#6ddb7c] font-semibold text-[14px]'>110 + <br /> DESTINATION </h1>
                                <h1 className='pb-5 text-[#6db3db] font-semibold text-[14px]'>60 + <br /> COUNTRY </h1>
                                <h1 className='vessel-text'>Our Vessel</h1>
                                <p className='text-white pb-12 tracking-widest leading-7 text-center'>ALWAYS AVAILABLE FOR <br /> SHIPMENTS</p>
                                <a className='button cursor-pointer'>Book Your Goods</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Shipment