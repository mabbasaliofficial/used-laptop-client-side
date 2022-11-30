import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../Assets/Banner/Images/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen rounded-lg mt-10" style={{ backgroundImage: `url(${banner})` }}>
  <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Mega Deals</h1>
      <p className="mb-5">At the end of the year there are attractive offers for everyone. You will get every product at a very low price from us. So without further delay make your shopping list now.</p>
    </div>
  </div>
</div>
    );
};

export default Banner;