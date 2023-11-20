import React from 'react'
import { products } from '../api'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';


const Product = () => {
    return (
        <div className='bg-white w-full h-auto'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-10'>
                    <div className='mt-14'>
                        <h1 className='product-heading'>Jute Bags</h1>
                        <p className='text-center pt-7'>Our Best Sell Products</p>
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