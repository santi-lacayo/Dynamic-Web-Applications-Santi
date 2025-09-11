//This is the file where you import everything you want visible in your app/website
import Card from './components/Card'
import RecipeInfo from './components/RecipeInfo'
import IngredientsList from './components/IngredientsList'
import InstructionsList from './components/InstructionsList'
import RecipeImg from './components/RecipeImg'
import './components/RecipeCard.css'
import {RECIPE} from './components/recipe-data'
//top level component
const App = ()  => {
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
            </Card>
        </div>
    )
}

export default App