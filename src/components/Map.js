import React from 'react'

const Map = () => {
    return (
        <div className='w-full mb-16 mt-4'>
            <div className='container mx-auto'>
                <div className='space-y-5 mx-5'>
                    <div>
                        <p className='text-center tracking-[1.7em] pb-2'>CONTACT US</p>
                        <h1 className='product-heading pb-4'>Let's get in touch</h1>
                    </div>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.6636939522004!2d90.42057057456225!3d23.723700889802256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b84e4827c3f3%3A0xcb4bd8f0f95ad07a!2s59%20Motijheel%20Commercial%20Area%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1699639731190!5m2!1sen!2sbd" className='border-none  w-full h-[450px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map