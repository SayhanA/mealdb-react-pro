import React, { useState } from 'react';
import Carts from '../Carts/Carts';
import OrderList from '../OrderList/OrderList';
import './Meals.css'

const Meals = ({meal,addMeal,selectMeal,removeMeal}) => {
    
    return (
        <div className='containers border border-red-500 w-[100%]'>
            <Carts meal={meal} addMeal={addMeal} removeMeal={removeMeal}></Carts>
            <OrderList selectMeal={selectMeal}></OrderList>
        </div>
    );
};

export default Meals;