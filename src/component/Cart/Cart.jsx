import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import MealByCaragory from '../MealByCaragory/MealByCaragory';

const Cart = ({ cart, addMeal, removeMeal, getsModalData}) => {
    // console.log(props.meal)
    const { idCategory, strCategory, strCategoryThumb, strCategoryDescription, getModalData} = cart;

    // console.log(idCategory)

    return (
        <div className='relative'>


            {/* The button to open modal */}
            <label onClick={() => getsModalData(strCategory)} htmlFor="my-modal-7" className=" top-0 w-full h-[85%] bg-transparent hover:bg-transparent">

                <div htmlFor="my-modal-5" className="card bg-base-100 shadow-xl rounded-lg hover:scale-105 transition-all h-full min-h-[460px]" title="click the cart to see all food">
                    <img className='rounded-lg' src={strCategoryThumb} alt="Shoes" />
                    <div className="mt-10">
                        <h2 className="card-title mb-3">
                            {strCategory}
                            <div className="badge badge-success w-7 h-4 mb-3"> <span className='text-[10px]'>New</span></div>
                        </h2>
                        <p className='mb-5'>{strCategoryDescription.slice(0, 110)} ... <button className='hover:text-red-500'>[read more]</button> </p>
                        <div className="card-actions justify-end absolute bottom-5 right-5">
                            <button onClick={() => addMeal(strCategory)} className="btn btn-outline btn-primary">Add Cart</button>
                            <button onClick={() => removeMeal(strCategory)} className="btn btn-outline btn-error">remove</button>
                        </div>
                    </div>

                </div>

            </label>

           

        </div>
    );
};

export default Cart;