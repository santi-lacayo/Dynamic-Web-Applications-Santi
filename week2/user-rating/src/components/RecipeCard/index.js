//This is the file where you import everything you want visible in your app/website
import Card from './Card'
import RecipeInfo from './RecipeInfo'
import IngredientsList from './IngredientsList'
import InstructionsList from './InstructionsList'
import RecipeImg from './RecipeImg'
import UserRating from '../UserRating'
import './RecipeCard.css'
import {RECIPE} from './recipe-data'
//this is where our recipe card component will live
const RecipeCard = () => {
    return (
    <div>
        {/* inside card we can put anything we want as a children  */}
        <Card> 
            <RecipeImg imgSrc={RECIPE.imgSrc} />
            <div className="card_text">
            <RecipeInfo title={RECIPE.title} description={RECIPE.description} />
            <div className="card_lists"> {/* it helps for organization to keep both lists in a class */}
                <IngredientsList data={RECIPE.ingredients}/>
                <InstructionsList data={RECIPE.instructions}/>
            </div>
            </div>
            <UserRating />
        </Card>
    </div>
    )
}

export default RecipeCard