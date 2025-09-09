//This file is in charge of setting the layout and defining where to grab the data and css from
import './style.css'
import { RECIPE } from './recipe-data'
import IngredientList from './IngredientList'

const RecipeCard = () => {
  return (
    <div className="card">
      <img src={RECIPE.imgSrc} alt="chickens" className="recipe_img" />

      <IngredientList ingredients={RECIPE.ingredients} title="Ingredients" />

      <div>
        <h2>Instructions</h2> 
        <ol>
          {RECIPE.instructions.map((step, index) => (
            <li key={index}>{step}</li> //This is what tells what will be inserted here and where to get it from 
          ))}
        </ol>
      </div>

      <div>
        <h2>Recommendations</h2>
        <ul>
          {RECIPE.recommendations.map((rec, index) => (
            <li key={index}>{rec}</li> //same as with instructions but here you tell it to pull another list 
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RecipeCard