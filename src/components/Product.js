import React from 'react'
import { products } from '../api'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';


const Product = () => {

    const textArray = [
        'Food grade (As per IJO 98/01 Standard) new jute bag size 44" x 26.5 ", weight: 2.25 Lbs (1020 gram), 6x8 porter & shot, hemmed at mouth, herackle sewn  packing 300 pcs/ bale',
        'Food grade (As per IJO 98/01 Standard) new jute bag size 44" x 26.5 ", weight: 2.00 Lbs (907 gram), 6x7 porter & shot, hemmed at mouth, herackle sewn  packing 300 pcs/ bale',
        'Food grade (As per IJO 98/01 Standard) new jute bag size 38" x 26.5 ", weight: 1.74 Lbs (789 gram), 6x7 porter & shot, hemmed at mouth, herackle sewn  packing 300 pcs/ bale',
        'Food grade (As per IJO 98/01 Standard) new jute bag size 40" x 26.5 ", weight: 1.81 Lbs (825 gram), 6x7 porter & shot, hemmed at mouth, herackle sewn  packing 300 pcs/ bale',
        'Food grade (As per IJO 98/01 Standard) new jute bag size 40" x 28 ", weight: 740 gram, 8x8 porter & shot, hemmed at mouth, herackle sewn  packing 300 pcs/ bale',
        'Food grade (As per IJO 98/01 Standard) new jute bag size 40" x 28 ", weight: 464 gram, 11x12 porter & shot, hemmed at mouth, herackle sewn  packing 1000 pcs/ bale'
    ]

    const textArrayHessian = [
        'New Hessian cloth 40-10, Oz/40”, 11x12 porter & shot, plain',
        'New Hessian cloth 40-7oz/40”, 9x8 porter & shot, plain',
        'New Hessian cloth 45-11oz/45”, 11x12 porter & shot, plain',
        'New Hessian cloth 45-9oz/45”, 9x10 porter & shot, plain',
    ]

    return (
        <div className='bg-white w-full h-auto'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-10'>
                    <div className='mt-14'>
                        <div className='mb-10'>
                            <h1 className='product-heading-sub-heading'>Some common specification of Bags for Coffee & Cocoa Beans Packing:</h1>
                            <div className='px-10 md:px-0 flex flex-col flex-wrap gap-y-8 pt-5 md:w-[615px] mx-auto'>
                            {
                                textArray.map((text, n) => (
                                    <p className='times-new-roman' key={n}>
                                        <span className='text-4xl px-3'>#</span>
                                        <span>{text}</span>
                                    </p>
                                ))
                            }
                            </div>
                        </div>
                        <div className='mb-20'>
                            <h1 className='product-heading-sub-heading'>Some common specification of Hessian Cloth: </h1>
                            <div className='px-10 md:px-0 flex flex-col flex-wrap gap-y-8 pt-5 md:w-[615px] mx-auto'>
                            {
                                textArrayHessian.map((text, n) => (
                                    <p className='times-new-roman-hessian' key={n}>
                                        <span className='text-4xl px-3'>#</span>
                                        <span>{text}</span>
                                    </p>
                                ))
                            }
                            </div>
                        </div>

                        <h1 className='product-heading'>Jute Bags</h1>
                        <p className='text-center pt-7'>Our Best Selling Products</p>
                    </div>

                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-10 mx-auto">
                            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 gap-y-14">

                                {
                                    products.map((item) => (
                                        <Fade left>
                                            <div key={item.id} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                                <div className="rounded-lg h-[480px] overflow-hidden">
                                                    <img alt="content" className="object-center object-contain h-full w-full" src={item.image} />
                                                </div>
                                                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{item.tittle}</h2>
                                                <p className="text-base leading-relaxed mt-2">
                                                    {
                                                        item.id === 12 ? <React.Fragment>
                                                            <p>
                                                                Material :- Jute, <br />
                                                                Color :- Beige, <br />
                                                                Size:- 15 X 6 X 5 Inches, <br />
                                                                Type:- Carry Bag, <br />
                                                                Uses:- Bottle Bag, Carry Bag (Reusable)
                                                            </p>
                                                        </React.Fragment> : item.discription
                                                    }
                                                </p>
                                                <Link to='/product' className="text-indigo-500 inline-flex items-center mt-3 cursor-pointer">Learn More
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </Fade>
                                    ))
                                }

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Product