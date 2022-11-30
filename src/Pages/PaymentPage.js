import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';

const PaymentPage = () => {
    useTitle('Payment');
    const product = useLoaderData();
    console.log(product.productName)
    return (
        <div>
            {product.productName}
        </div>
    );
};

export default PaymentPage;