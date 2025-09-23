import React from 'react'
import Dropdown from '../components/Dropdown'

const OPTIONS = [ // array of options objects
    {label: 'Red', value: 'red'}, 
    {label: 'Green', value: 'green'}, 
    {label: 'Blue', value: 'blue'}, 
]
const DropdownPage = () => {
    return (
      <div>
        <h1>Dropdown Page</h1>
        <Dropdown options={OPTIONS}/>
      </div>
    )
  }
  
  export default DropdownPage