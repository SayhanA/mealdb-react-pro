import React from 'react';

const NewCart = ({meal, addMeal}) => {
    
    const {idMeal, strMeal, strArea, strCategory, strInstructions, strMealThumb} = meal
    return (
        <div className="card bg-base-100 shadow-xl rounded-lg hover:scale-105 transition-all">
            <img className='rounded-lg' src={strMealThumb} alt="Shoes" />
            <div className="mt-10">
                <h2 className="card-title mb-3">
                    {strMeal}
                    <div className="badge badge-success w-7 h-4 mb-3"> <span className='text-[10px]'>New</span></div>
                </h2>
                <p className='mb-5'>{strInstructions.slice(0,110)} ... <button className='hover:text-red-500'>[read more]</button> </p>
                <div className="card-actions justify-end">
                <button className="btn btn-outline btn-primary">All {strCategory}s</button>
                <button onClick={() => addMeal(strMeal)} className="btn btn-outline btn-primary">Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default NewCart;