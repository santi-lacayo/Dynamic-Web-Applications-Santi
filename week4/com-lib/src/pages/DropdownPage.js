import {useState} from 'react'
import Dropdown from '../components/Dropdown'

const OPTIONS = [ // array of options objects
    {label: 'Red', value: 'red'}, 
    {label: 'Green', value: 'green'}, 
    {label: 'Blue', value: 'blue'}, 
]

const COLOR_MAP = {
    red: 'bg-red-500',
    green: 'bg-green-400',
    blue: 'bg-blue-500',
}

// example usage of COLOR_MAP
// className={COLOR_MAP[value.value]
// template literals
// const colorClass = `bg-${value?.value}-500`

const DATA_TO_FILTER = [
    {id: 1, name: 'Santi', team: 'red'},
    {id: 1, name: 'Emilio', team: 'green'},
    {id: 1, name: 'Nicolas', team: 'blue'},
    {id: 1, name: 'Arturo', team: 'red'},
    {id: 1, name: 'Elias', team: 'blue'},
]

const DropdownPage = () => {
    // this piece of state is where we receive our dropdown selected value, we keep track of it in the parent component so that it, 
    // and all children have access to this piece of states value and can update and render
    const [value, setValue] = useState(null)

    let filteredData = DATA_TO_FILTER

    // if the user selected an option from the dropdown, find the value key, if the value exists
    if (value?.value) {
        // filter our array by the of seleced option
        filteredData = DATA_TO_FILTER.filter((student) => student.team === value.value)
    }

    const handleChange = (option) => {
        setValue(option)
    }

    return (
      <div>
        <h1 className={COLOR_MAP[value?.value]}>
            Dropdown Page with user selected value of: {value?.label}
        </h1>
        <Dropdown options={OPTIONS} onChange={handleChange} value={value}/>
        <h2 className={COLOR_MAP[value.value]}>Students from {value?.label}:</h2>
        {
            filteredData.map((student) =>{
                return <p key={student.id}>{student.name}</p>
            })
        }
      </div>
    )
  }
  
  export default DropdownPage