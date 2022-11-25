import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const ProductsCategory = () => {
    const [categories, setCategories] = useState([]) 

    useEffect(() => {
        fetch('http://localhost:5000/productsCategory')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <section className='mt-10'>
              <div className="divider">
                <h2 className='text-3xl font-bold'>Products</h2>
              </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    categories.map(category => <CategoryCard
                    key={category.id}
                    category={category}
                    ></CategoryCard>)
                }
            </div>
        </section>
    );
};

export default ProductsCategory;