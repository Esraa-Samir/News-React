import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Navigation from './Navigation';

const Container = ({children}) => {
    return(
        <div>
            <Navigation/>
            <Navbar/>
                {children}
            <Footer/>
        </div>
    );
};

export default Container;