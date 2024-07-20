import React from 'react';

import Header from "../partials/header/Header";
import IntroSlider from '../container/IntroSlider/IntroSlider';
import HomeAbout from '../components/About/HomeAbout.jsx';
import ContactInformation from '../container/ContactInformation/ContactInformation';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';



const HomeOne = () => {
    return (
        <React.Fragment>
          
            <Header />
            <IntroSlider />
            <HomeAbout />
            
            <ContactInformation />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default HomeOne;



