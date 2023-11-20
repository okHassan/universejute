import React from 'react';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Product from './Pages/Product';
import Contact from './Pages/Contact';

function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<Product />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </React.Fragment>
    );
}

export default App;
