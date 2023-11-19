import React from 'react'

const SiteSec = () => {
    return (
        <div className='w-full h-[650px] bg-white'>
            <div className='container mx-auto'>
                <div className='h-[750px] flex justify-center items-center gap-36'>
                    <div>
                        <img src='/images/site.jpg' alt='story' className='w-full h-[350px] rounded-3xl' />
                    </div>
                    <div className='w-[500px] flex flex-col'>
                        <h1 className='site-text-h1 text-start text-slate-700'>Everything is here!</h1>
                        <p className='text-start text-slate-800 mb-10 mt-4'>It is very easy to browse our Web Portal nowadays. You can keep a note of the product code. Just Put your Products Code in the Search Option. You can easily find a product in just a minute. <br /><br />Every product has a quick Quote Option. Just fill-up the form with your product requirements & submit that as quickly as possible. We will give you a reply within 24 – 72 hours. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SiteSec