import {useState} from 'react'

const SearchBar = (props) => {
    const {onSubmit} = props
    const [term, setTerm] = useState('')
    
    const handleFormSubmit = (event) => {
        // disable the form input collection built into HTML
        // block the built in page refresh
        event.preventDefault()
        // on submit comes in from the forms parent component (App)
        // it is defined there and passed as a prop 
        onSubmit(term)
    }

    const handleChange = (event) => {
        // set our local value state here
        setTerm(event.target.value)
    }
    return (
         <div>
        <form onSubmit={handleFormSubmit}>
        {/* every element to be properly bound needs an onChange and a value prop 
        onChange fires everytime the use changes the input for a text input, 
        thats everytime the user clicks a key value needs to be toied to a piece of local state
        if you have a multi input form, each input or form element will need a 
        piece of state to bind the value, and a handler function to pass into ouronChange
        */}
        <input type="text" onChange={handleChange} value={term}/>
        </form>
    </div>
    )
}

export default SearchBar