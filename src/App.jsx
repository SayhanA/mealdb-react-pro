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

  let arr = [];
  const addMeal = (props) => {
    arr = [...arr,props]
    localStorage.setItem("Meals",JSON.stringify(arr))
    
  }
  
  return (
    <div className='border border-green-700'>
      <Header searchItem={searchItem}></Header>
      <Meals meal={meal} addMeal={addMeal}></Meals>
    </div>
  )
}

export default App
