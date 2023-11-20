import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ContactF from '../components/ContactF'
import ContectUS from '../components/ContectUS'

const Contact = () => {
    return (
        <React.Fragment>
            <Nav />
            <div className='pt-14'>
                <ContectUS />
                <ContactF /> 
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Contact