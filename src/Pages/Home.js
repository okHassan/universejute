import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import SubHero from '../components/SubHero'
import SimpleStory from '../components/SimpleStory'
import Product from '../components/Product'
import MessangerBag from '../components/MessangerBag'
import SiteSec from '../components/SiteSec'
import Map from '../components/Map'
import Link from '../components/Link'
import Footer from '../components/Footer'
import Plan from '../components/Plan'
import Shipment from '../components/Shipment'
import Query from '../components/Query'
import Category from '../components/Category'
import Gellary from '../components/Gellary'
import Services from '../components/Services'

const Home = () => {
    return (
        <React.Fragment>
            <Nav />
            <Hero />
            <SubHero />
            <SimpleStory />
            <Product />
            {/* <MessangerBag /> */}
            <Category />
            <Gellary />
            <Services />
            {/* <SiteSec /> */}
            <Shipment />
            <Plan />
            <Query />
            <Map />
            <Link />
            <Footer />
        </React.Fragment>
    )
}

export default Home