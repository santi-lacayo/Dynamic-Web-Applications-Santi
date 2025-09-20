import React from 'react'
import Dropdown from '../components/Dropdown'

const ITEMS = [
  { id: '1', label: 'Siamese' },
  { id: '2', label: 'Persian' },
  { id: '3', label: 'British' },
];

const DropdownPage = () =>{
  return (
    <div>
      <h1>Dropdown Page</h1>
      <Dropdown title="Types of cats" items={ITEMS}/>
    </div>
  )
}

export default DropdownPage