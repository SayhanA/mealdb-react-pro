import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import Header from './component/Header/Header'
import Meals from './component/Meals/Meals'

function App() {
  const [count, setCount] = useState('')
  const [meal, setMeal] = useState('')
  useEffect( () => {
    if(count){
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${count}`)
      .then(res => res.json())
      .then(data => setMeal(data))
    }
  } ,[count])
  
  const searchItem = () => {
    const searchInput = document.getElementById('search-input')
    setCount(searchInput.value)
  }
  

  // setMeal in Meal Order list
  const [selectMeal , setSelectMeal] = useState([])

  useEffect( () => {
    const getMeal = JSON.parse(localStorage.getItem('Meals'))
    if(getMeal){
        setSelectMeal(getMeal)
    }
} ,[])
  
  const addMeal = (props) => {

    const getMeal = JSON.parse(localStorage.getItem('Meals'))
    if(!getMeal){
      const mealArray = [...selectMeal,props]
      setSelectMeal(mealArray)
      localStorage.setItem("Meals",JSON.stringify(mealArray))
    }
    else{
      const findMeal = getMeal.find( meal => meal == props)
      if(findMeal == undefined){
        console.log("new")
        const mealArray = [...selectMeal,props]
        setSelectMeal(mealArray)
        localStorage.setItem("Meals",JSON.stringify(mealArray))
      }
      else{
        console.log('old')
        alert('You can not select twice')
      }
    }
    
  }

  // Remove meal item from Order list 
  const removeMeal = (props) => {
    // console.log("removeMeal is:", props)
    const getMeal = JSON.parse(localStorage.getItem('Meals'))
    if(getMeal){
      const findRemoveMeal = getMeal.find( meal => meal == props)
      // console.log("findRemoveMeal found:",findRemoveMeal)
      if(findRemoveMeal != undefined){
        const indexOfMeal = getMeal.indexOf(findRemoveMeal)
        getMeal.splice(indexOfMeal,1)
        setSelectMeal(getMeal)
        localStorage.setItem("Meals",JSON.stringify(getMeal))
      }
      else{
        alert("You didn't add this Meal")
      }
    }
  }
  
  return (
    <div className='border border-green-700'>
      <Header searchItem={searchItem} selectMeal={selectMeal}></Header>
      <Meals meal={meal} addMeal={addMeal} selectMeal={selectMeal} removeMeal={removeMeal}></Meals>
    </div>
  )
}

export default App
