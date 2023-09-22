import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Services from './Components/Services';


import "./Style/App.scss";
import "./Style/Header.scss";
import "./Style/Home.scss";
import "./Style/Footer.scss";
import "./Style/Contact.scss";
import "./Style/MediaQuery.scss";

const App = () => {
    return(
        <>
            <Router>
                    <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/services' element={<Services />} />
                </Routes>
            </Router>

            <Footer />
        </>
    );
};


export default App;