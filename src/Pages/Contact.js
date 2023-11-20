import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Map from '../components/Map'

const Contact = () => {
    return (
        <React.Fragment>
            <Nav />
            <div className='pt-14'>
                <Map />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Contact