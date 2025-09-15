//import './RecipeCard.css'
//to use css modules you must rename your css sheet {title}.module.css
//Modules are a different way of using css you can use multiple css sheets in the same file
import styles from './RecipeCard.module.css'
//this component just shows the title of our card
const RecipeInfo = (props) => {
    const {title, description} = props
    return (
        <div className={styles.recipe_info}>
            <h1 class Names={styles.recipe_title}>{title}</h1>
            <h3>{description}</h3>
        </div>
    )
}

export default RecipeInfo