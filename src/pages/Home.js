import React from 'react';
import ClientFeedback from '../components/ClientFeedback/ClientFeedback';
import Footer from '../components/Footer/Footer';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import OurWorks from '../components/OurWorks/OurWorks';
import Services from '../components/Services/Services';

const Home = () => {
    return (
        <>
            <HomeBanner />
            <Services />
            <OurWorks />
            <ClientFeedback />
            <Footer />
        </>
    );
};

export default Home;