import React from 'react'
import { products } from '../../api/index'
import ProductCard from './ProductCard'
import Fade from 'react-reveal/Fade';

const ProductPage = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex justify-between flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 gap-y-14">

                    {
                        products.map((item) => (
                            <Fade left>
                                <ProductCard key={item.id} item={item} />
                            </Fade>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default ProductPage