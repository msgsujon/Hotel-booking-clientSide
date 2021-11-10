import React from 'react';
import Banner from '../Banner/Banner';
import Menu from '../Menu/Menu';
import Services from '../Services/Services';
import Travel from '../Travel/Travel';

const Home = () => {
    return (
        <div>
            {/* here services and banner */}
            <Banner></Banner>
            <Menu></Menu>
            <Services></Services>
            <Travel></Travel>
        </div>
    );
};

export default Home;