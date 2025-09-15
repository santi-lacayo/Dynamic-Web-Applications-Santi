import './RecipeCard.css'
//create a list you are going to use in the card and say how you want the list to be and where to get the data from
const InstructionsList = (props) => {
    const {data} = props
    return (
        <div className="instructions_list">
    <h3 className="list_title">Instructions</h3>
    <ol>
        {data.map((item, index) => {
        return (
        <li key={index} className="list_item"> 
            {item}
        </li>
        )
    })}
    </ol>
    </div>
)
}

export default InstructionsList