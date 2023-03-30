import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import NewCart from '../NewCart/NewCart';

const Carts = ({meal, addMeal, removeMeal}) => {

    const newMeal = meal.meals
    
    const [carts, setCarts] = useState([]);
    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => setCarts(data.categories))
    } ,[])

   if(!meal){
        return (
            <div>
                <h1 className='text-center my-10 text-3xl font-bold'>Our Meal Catagories</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10 ml-5 px-5'>
                    {
                        carts.map( cart => <Cart cart={cart} addMeal={addMeal} removeMeal={removeMeal} key={carts.indexOf(cart)}></Cart>)
                    }
                </div>
            </div>
        );
   }
   else{
    return(
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10 ml-5 px-5'>
            {
                meal.meals.map( meal => <NewCart meal={meal} addMeal={addMeal} removeMeal={removeMeal}  key={newMeal.indexOf(meal)}></NewCart>)
            }
        </div>
    )
   }
};

export default Carts;