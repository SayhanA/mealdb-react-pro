import React from 'react';
import MealByCaragory from '../MealByCaragory/MealByCaragory';

const ModalCart = ({addMeal, removeMeal, loadedModalData}) => {
    // console.log(loadedModalData.meals)
    if(loadedModalData.meals != undefined){
        return (
            <>
                 {/* Put this part before </body> tag */}
                 <input type="checkbox" id="my-modal-7" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl relative">
                        <div className="modal-action absolute top-[-20px] right-0">
                            <label htmlFor="my-modal-7" className="btn z-10">Yay!</label>
                        </div>
                        <div className='grid grid-cols-3 gap-5'>
                            {
                                loadedModalData.meals.map( (data,key) => <MealByCaragory  addMeal={addMeal} removeMeal={removeMeal} data={data} key={key}></MealByCaragory>)
                            }
                        </div>
    
                    </div>
                </div>
            </>
        );
    }
};

export default ModalCart;