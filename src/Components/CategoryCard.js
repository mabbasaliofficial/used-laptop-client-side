import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    const {brand_name, image, id, description} = category;
    return (
        <div className="card bg-base-100 shadow-xl border border-purple-400">
        <figure><img src={image} className="w-full h-60" alt="Laptop" /></figure>
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">{brand_name}</h2>
          <p className='mb-5'>{description.length > 150 ? <p>{description.slice(0, 150) + '...'} <Link to={`/category/${id}`} className="text-blue-400">Read More</Link></p> : <p>{description}</p>}</p>
          <div className="card-actions mx-auto w-full">
      <Link to={`/category/${id}`} className="btn btn-primary w-full">Show All</Link>
    </div>
        </div>
      </div>
    );
};

export default CategoryCard;