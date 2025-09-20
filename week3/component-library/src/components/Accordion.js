import {useState} from 'react'
import {GoChevronDown, GoChevronLeft} from 'react-icons/go'

/*
const Props =
label: string,
content: string,
Click: function,
*/

//basic data we are going to later show in our accordion
const DUMMYDATA = {
    id: 'l1kj2i0g',
      label: 'When do chickens molt?',
      content:
        'Duis eget turpis vel ligula imperdiet suscipit eu ut felis. Ut eget neque at ligula aliquam ultricies eu vitae dolor. Proin eu dignissim velit. Morbi convallis volutpat nisl at vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam non dignissim sem. Aliquam cursus, tortor at iaculis fermentum, felis tortor interdum justo, eu ornare lorem dui eu lorem. Phasellus nibh sem, tempus at fermentum vel, pulvinar at tellus. Nunc eleifend velit at massa bibendum placerat. Sed tincidunt vestibulum ante ut pellentesque. Duis eget nisl varius, dapibus nunc sed, aliquam diam',
}

//define weather the tab of the accordion is open or close
const Accordion = (props) => {
    //pull out our props
    const {items} = props
    //state
    const [isExpanded, setIsExpanded] = useState(true)

    //switch from true to false and viceversa
    const handleClick = () => {
        setIsExpanded(!isExpanded)
    }

    //our first ternar (shorthand if/else)
    /*
    1. condition we are checking (like a boolean)
    2. what to return if 1 is true
    3. what to return if 1 is false
    */
    const icon = (
    <span className="text-2xl">
        {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
    </span>
    )

    //JSX returned and rendered to the user
    return (
    //we are pushing that id from our data
    <div key={DUMMYDATA.id}>
        <div onClick={handleClick} className= "flex justify-between p-3 bg-gray-100 border-b items-center">
            {DUMMYDATA.label}
            {icon}
        </div>
        {/* conditional rendering 
            the content div will only render when isExpanded is true, if false don't render anything
            whatever we defined as conent in DUMMYDATA will show up here 
        */
            isExpanded && <div className="border-b p-5">{DUMMYDATA.content}</div>
        }
        
       </div>
    ) 
}

export default Accordion