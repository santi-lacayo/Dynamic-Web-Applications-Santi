import '../RecipeCard/RecipeCard.css'
import {useState} from 'react';
//library used for icons in this case favorite which is a heart
import Favorite from '@mui/icons-material/Favorite';

//defines a react component named UserRating
export const UserRating = () => {
    const [count, setCount] = useState(0) //Every time setCount is called, React re-renders the component with the new value.
    //increase count by one only if count is less than 5
    const handlePlusCLick = () => {
        //it hides the button if the count is more than 4
        if (count >= 4) { 
            const btn = document.getElementById('button2');
            if (btn) btn.style.display = 'none';
        }
        //it will onky keep adding hearts if your count is less or equal to 5
        if (count >= 5) return;       
        setCount(count + 1);  
    };
    //decreases count by one but only if it's more or equal to 0
    const handleMinusClick = () => {
        if (count == 5){//when your value is equal to five show the button again
            const btn = document.getElementById('button2');
            if (btn) btn.style.display = '';
        }
        if (count <= 0) return;
        setCount(count - 1);
    }

    return (
        <div className="buttons">
            <h4>Rate the recipe:</h4>
            <button className="button1" onClick={handleMinusClick}> - </button>  {/* Make buttons that subtract/add hearts to our recipe */}
            {
                [...Array(count)].map((i, index) => { //map goes through each element of the array, and returns a new array with the results
                    return (
                        <span key={index} className="symbol">
                                <Favorite/>  {/* here we are calling the icon we want to show and depending on the count it will show a different amount of hearts */}
                        </span>
                    )
                })}
            <button id="button2" onClick={handlePlusCLick}>+</button>
        </div>
    )
}

export default UserRating