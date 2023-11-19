import React from 'react';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </React.Fragment>
    );
}

export default App;
