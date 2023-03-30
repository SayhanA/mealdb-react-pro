import React, { useEffect, useState } from 'react';

const OrderList = ({selectMeal}) => {
    
    return (
        <div className='bg-orange-200 '>
            <h2 className='text-center text-2xl font-bold py-5 sticky top-1'>Order List</h2>
            <div className='sticky top-20'>
            {
                selectMeal?.map( (mealName,index) => <div className='flex' key={index}>
                    <p className='mx-5'>{index+1}</p>
                    <p className=' leading-7 '>{mealName}</p>
                </div>)
            }
            </div>
        </div>
    );
};

export default OrderList;