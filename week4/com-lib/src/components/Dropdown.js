import {useState} from 'react'
import cx from 'classnames'

const Dropdown = (props) => {
    const {options} = props
    // local state
    const [isOpen, setIsOpen] = useState(true) //false means the dropdown will be closed at start
    const renderedOptions = options.map((opt, index) => {
        return ( 
        <div key={index} className="hover:bg-sky-100 rounded cursor-pointer p-1">
            {opt.label}
        </div>
        )
    })

    return (
        <div className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer">
                {/* conditional text coming soon */}
                Select...
                
            </Panel>
            {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
        </div>
    )
}





// this is how you make a function
const Panel = (props) => {
    const {className, children, ...rest} = props
    const finalClassNames = cx(
        props.className, 
        'border rounded p-3 shadow bg-white w-full')
    return <div className={finalClassNames} >
        {children}
        </div>
}

export {Panel}
export default Dropdown