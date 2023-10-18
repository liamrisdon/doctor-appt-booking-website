import React from 'react';

import Header from "../components/Header.jsx";
import Footer from '../components/Footer.jsx';
import Routers from "../routes/Router.jsx";

const Layout = () => {
    return <>
        <Header />
        <main>
            <Routers />
        </main>
        <Footer />
    </>

}

export default Layout;