import React from 'react'
import About from "./About";
import Contact from "./Contact";
import Navb from "./Navb";
import Footer from "./Footer/Footer";
import Slider from './carousel/Slider'
//import Bgimg from "./Footer/Bgimg";


function Home() {
    return (
        <>
            <Navb />
            <Slider />
            <About />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
