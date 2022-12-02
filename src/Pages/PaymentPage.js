import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from '../Components/CheckoutForm';
import useTitle from '../Hooks/useTitle';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const PaymentPage = () => {
    useTitle('Payment');
    const product = useLoaderData();
    console.log(product)
    return (
        <div>
             <h3 className="text-3xl font-bold text-center py-5">Payment</h3>
             <p className='text-center'>Please Pay <strong>{product.price}TK</strong> for <strong>{product.productName}</strong></p>
             <div className='w-1/2 border mx-auto p-5 rounded-lg mt-20'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm product={product}/>
                </Elements>
             </div>
             
        </div>
    );
};

export default PaymentPage;