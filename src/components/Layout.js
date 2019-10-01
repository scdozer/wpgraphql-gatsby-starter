import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';


const Layout = ({children}) => (
    <>
        <Header />
        <div className="app-wrapper">{children}</div>
        <Footer />
    </>
)

export default Layout;

