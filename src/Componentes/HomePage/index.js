import React from 'react';
import Card from '../Card/';
import Card1 from '../Card/index1';
import Card2 from '../Card/index2';

import './style.css';

function HomePage() {
    return(
        <div className="home-page">
            <Card />
            <Card1 />
            <Card2 />
        </div>
    )
}

export default HomePage;