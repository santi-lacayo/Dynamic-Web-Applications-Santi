import './RecipeCard.css'
//create a list you are going to use in the card and say how you want the list to be and where to get the data from
const IngredientsList = (props) => {
    const {data} = props
    return (
    <div className="ingredients_list">
    <h3 className="list_title">Ingredients</h3>
    <ul>
        {data.map((item, index) => { {/* .map transforms data into an array */}
        return (
        <li key={index} className="list_item"> {/* key keeps track of list items */}
            {item}
        </li>
        )
    })}
    </ul>
    </div>
)
}

export default IngredientsList