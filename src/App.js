import React, { useEffect } from 'react';
import { Helmet } from "react-helmet-async";

import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import Development from './components/Development';

function App() {

    return (
        <React.Fragment>
            <Helmet>
                <title>Universe Jute | Jute Bag Manufacturer</title>
                <meta
                    name="description"
                    content="Universe Jute Fiber & Bag Corporation is one of the leading exporters of all kinds of jute products, i.e, Jute Sack / Gunny Bags/ Hessian bag/ Hessian cloth/ Shopping bags/ Twine etc"
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
