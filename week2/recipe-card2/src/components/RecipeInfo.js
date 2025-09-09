//import './RecipeCard.css'
//to use css modules you must rename your css sheet {title}.module.css
import styles from './RecipeCard.module.css'
//this component just shows the title of our card
const RecipeInfo = (props) => {
    const {title, description} = props
    return (
        <div className={styles.recipe_info}>
            <h2 class Names={styles.recipe_title}>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default RecipeInfo