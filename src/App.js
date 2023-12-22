import React, { useEffect } from 'react';
import { Helmet } from "react-helmet-async";

import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Product from './Pages/Product';
import Contact from './Pages/Contact';

function App() {

    useEffect(() => {
        alert('This site is under development. Please check back later. Thank you. :)')
    }, [])

    return (
        <React.Fragment>
            <Helmet>
                <title>Design+Code - Learn to design and code React and Swift apps</title>
                <meta
                    name="description"
                    content="Learn design and code by building real apps with React and Swift. Complete courses about UI design, web and iOS development using Figma, CSS, React Hooks and SwiftUI."
                />;
            </Helmet>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<Product />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </React.Fragment>
    );
}

export default App;
