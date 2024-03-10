import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './Users'
import Friends from './friends'

function App() {
 
function handleClick(){
  alert('btn clicked');
}

const handleClick2 =() => {
  alert('button 2 clicked')
}

const addToFive = (num) =>{
  alert(num + 5);
}

  return (
    <>
      
      <h2>React Core Concepts 2</h2>
       <Friends></Friends>
         <Users></Users>   

         <Team></Team> 

        <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => {alert('third click')}}>Click 3</button>
      <button onClick={() => addToFive(3)}>Click 4</button>
    </>
  )
}

export default App
