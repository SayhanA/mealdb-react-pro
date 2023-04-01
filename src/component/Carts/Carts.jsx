import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import NewCart from '../NewCart/NewCart';
import ModalCart from '../ModalCart/ModalCart';

const Carts = ({meal, addMeal, removeMeal}) => {


        // load data for Modal

        const [loadedModalData, setLoadedModalData] = useState([])
        if(loadedModalData.length != 0){
            // console.log("loadedModalData:",loadedModalData)
        }
    
        function getsModalData(props){
            // console.log("get Modal Data:", props)
            setModalData(props)
    
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${props}`)
            .then(res => res.json())
            .then(data => setLoadedModalData(data))
        }
        
        
    
    
    // before code added

    const newMeal = meal.meals

    const [modalData, setModalData] = useState(null);
    
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
                        carts.map( cart => <Cart cart={cart} getsModalData={getsModalData} setModalData={setModalData} addMeal={addMeal} removeMeal={removeMeal} key={carts.indexOf(cart)}></Cart>)
                    }
                </div>
                    <ModalCart addMeal={addMeal} removeMeal={removeMeal} loadedModalData={loadedModalData}></ModalCart>
                    
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