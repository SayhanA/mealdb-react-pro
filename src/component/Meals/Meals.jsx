import React, { useState } from 'react';
import Carts from '../Carts/Carts';
import OrderList from '../OrderList/OrderList';
import './Meals.css'

const Meals = ({meal,addMeal}) => {
    
    return (
        <div className='containers border border-red-500 w-[100%]'>
            <Carts meal={meal} addMeal={addMeal}></Carts>
            <OrderList></OrderList>
        </div>
    );
};

export default Meals;