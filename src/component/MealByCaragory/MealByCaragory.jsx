import React from 'react';

const MealByCaragory = ({addMeal, removeMeal, data}) => {
    // console.log(data)
    const {idMeal, strMeal, strMealThumb} = data;
    // console.log(strMeal, strMealThumb)
    return (
        <div>

             <div  className="card m-0 p-4 bg-base-100 shadow-xl rounded-lg hover:scale-105 transition-all h-full min-h-[490px]" title="click the cart to see all food">
                    <img className='rounded-lg' src={strMealThumb} alt="Shoes" />
                    <div className="mt-10">
                        <h2 className="card-title mb-3">
                            {strMeal}
                        </h2>
                        <div className="card-actions justify-end absolute bottom-5 right-5">
                            <button onClick={() => addMeal(strMeal)} className="btn btn-outline btn-primary">Add Cart</button>
                            <button onClick={() => removeMeal(strMeal)} className="btn btn-outline btn-error">remove</button>
                        </div>
                    </div>

                </div>
        </div>
    );
};

export default MealByCaragory;