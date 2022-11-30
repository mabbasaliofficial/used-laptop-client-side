import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PaymentPage = () => {
    const product = useLoaderData();
    console.log(product.productName)
    return (
        <div>
            {product.productName}
        </div>
    );
};

export default PaymentPage;