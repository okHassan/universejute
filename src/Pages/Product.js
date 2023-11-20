import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ProductPage from '../components/ProductPage'

const Product = () => {
    return (
        <React.Fragment>
            <Nav />
            <div className='py-10'>
                <ProductPage />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Product