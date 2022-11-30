import React from 'react';
import Banner from '../Components/Banner';
import Gallery from '../Components/Gallery';
import ProductsCategory from '../Components/ProductsCategory';
import useTitle from '../Hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div className='mx-5'>
            <Banner/>
            <ProductsCategory/>
            <Gallery/>
        </div>
    );
};

export default Home;