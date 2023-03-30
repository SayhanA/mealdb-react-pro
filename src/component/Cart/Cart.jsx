import React from 'react';

const Cart = ({cart, addMeal, removeMeal}) => {
    // console.log(props.meal)
    const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = cart;

    return (
        <div className="card bg-base-100 shadow-xl rounded-lg hover:scale-105 transition-all">
            <img className='rounded-lg' src={strCategoryThumb} alt="Shoes" />
            <div className="mt-10">
                <h2 className="card-title mb-3">
                    {strCategory}
                    <div className="badge badge-success w-7 h-4 mb-3"> <span className='text-[10px]'>New</span></div>
                </h2>
                <p className='mb-5'>{strCategoryDescription.slice(0,110)} ... <button className='hover:text-red-500'>[read more]</button> </p>
                <div className="card-actions justify-end">
                <button onClick={() => addMeal(strCategory)} className="btn btn-outline btn-primary">Add Cart</button>
                <button onClick={() => removeMeal(strCategory)} className="btn btn-outline btn-error">remove</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;