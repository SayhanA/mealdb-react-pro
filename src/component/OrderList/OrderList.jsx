import React, { useState } from 'react';

const OrderList = () => {
    const getMeal = JSON.parse(localStorage.getItem('Meals'))  
    
    return (
        <div className='bg-orange-200 '>
            <h2 className='text-center text-2xl font-bold py-5 sticky top-1'>Order List</h2>
            <div className='sticky top-20'>
            {
                getMeal?.map( mealName => <div className='flex' key={getMeal.indexOf(mealName)}>
                    <p className='mx-5'>({getMeal.indexOf(mealName)+1})</p>
                    <p className=' leading-7 '>{mealName}</p>
                </div>)
            }
            </div>
        </div>
    );
};

export default OrderList;