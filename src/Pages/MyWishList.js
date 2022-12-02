import React from 'react';
import useTitle from '../Hooks/useTitle';

const MyWishList = () => {
    useTitle('My Wish List');
    return (
        <div className='flex justify-center items-center'>
            <h1 className='text-3xl font-bold'>Welcome to my wishlist</h1>
        </div>
    );
};

export default MyWishList;