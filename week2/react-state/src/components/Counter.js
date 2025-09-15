import {useState} from 'react'
//you may come across the useState() in the wild
//state is an object that keeps track of variables that will be updated based on user input
//when state changes, the component NOT the page update + refresh and re-render and the changes are reflected on the screen

const Counter = () => {
    /*
    state = {
    count: 0,
    }
    the function to update counts value
    set count(1)
    */
   //when we call useState, we need to name our piece state, and the function and declare an initial value for that state
   const [count, setCount] = useState(0) //we are calling that piece of state with count and set is what updates it
    //for js never use count = count-1 you need to use your setter
   const handlePlusClick = () => {
    setCount(count + 1)

   }
   const handleMinusClick = () => {
    if (count <= 0) {
        return
    }
    setCount(count - 1) 
   }
   //where we return de jsx
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleMinusClick}>[-]</button>
            <button onClick={handlePlusClick}>[+]</button>
        </div>
    )
}

export default Counter