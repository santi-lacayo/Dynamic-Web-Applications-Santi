// whenever sometthing needs to change bby an interaction always use useState
import {useState} from 'react'
// classnames library to merge our classes
import cx from 'classnames'
import {GoChevronDown} from 'react-icons/go'

const Dropdown = (props) => {
    const {options, onChange, value} = props
    // local state
    const [isOpen, setIsOpen] = useState(false) //false means the dropdown will be closed at start
   
    // simple event
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option) => {
        setIsOpen(false)
        // need some other function defined by the parent component passed in as a prop to call here
        onChange(option)
    }

    const renderedOptions = options.map((opt, index) => {
        return ( 
        <div 
        onClick={() => handleOptionClick(opt)} 
        key={index} 
        className="hover:bg-sky-100 rounded cursor-pointer p-1">
        {opt.label}
        </div>
         )
    })

    return (
        <div className="w-48 relative">
            <Panel 
            onClick = {handleClick}
            className="flex justify-between items-center cursor-pointer">
                {/* great use of a ternary */}
                {/* ? if it has a value do something if not leave it like that {value?.value} */}
                {value ? value.label : 'Select...'} <GoChevronDown />
            </Panel>
            {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
        </div>
    )
}




// this is how you make a function
const Panel = (props) => {
    const {className, children, ...rest} = props
    const finalClassNames = cx(
        className, 
        'border rounded p-3 shadow bg-white w-full')
    return (
        <div {...rest} className={finalClassNames} >
        {children}
        </div>
    )
}

export {Panel}
export default Dropdown