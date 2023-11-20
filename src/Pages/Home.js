import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import SubHero from '../components/SubHero'
import Product from '../components/Product'
import Map from '../components/Map'
import Link from '../components/Link'
import Footer from '../components/Footer'
import Plan from '../components/Plan'
import Shipment from '../components/Shipment'
import Gellary from '../components/Gellary'
import Services from '../components/Services'

const Home = () => {
    return (
        <React.Fragment>
            <Nav />
            <Hero />
            <SubHero />
            <Product />
            <Gellary />
            <Services />
            <Shipment />
            <Plan />
            <Map />
            <Link />
            <Footer />
        </React.Fragment>
    )
}

export default Home