import './RecipeCard.css'
//This works as a div card where we can put stuff inside, images, text, etc for our recipe, basically right now we only have the background 
const Card = (props) => {
    //children is a prop we get for free, children can be text or anything else that needs to become the inner html of this component
    const {children} = props //we will be calling all of the compinents inside props since that what we decided it to be
    return <div className="card">{children}</div>
}

export default Card