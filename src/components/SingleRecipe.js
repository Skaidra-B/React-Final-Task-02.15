import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import mainContext from "../context/mainContext";


const SingleRecipe = ({item, index}) => {

    const nav = useNavigate()
    const {getToFavorites, setToFavorites, getRecipe, setRecipe, getReview, getRates} = useContext(mainContext)

    function addToFavorites() {
        const favorite = getToFavorites.find(x => x.title === item.title)

        if(favorite) {

        } else {
            setToFavorites([...getToFavorites, item])
        }
    }

    function remove() {
        const result = getRecipe.filter((x, i) => i !== index)
        setRecipe([...result])
    }

    function removeFromFavorites() {
        setToFavorites(getToFavorites.filter(x => x.title !== item.title))
    }

    return (
        <div className="recipeCard">
            <img onClick={() => nav('/recipe/'+item.url)}  src={item.photos[0]} alt=""/>
            <h2>{item.title}</h2>
            <div>Ingredients: {item.ingredients.map((x, i) => <ul key={i}>{x}</ul>)}</div>
            <div>Preparation time: {item.prepTime}</div>
            <div>Preparation steps: {item.prepSteps.length}</div>
            <div>Reviews: {item.review.length}</div>
            <div>Rating: {item.avgRate}</div>
            <div className="d-flex space-btw">
                <button onClick={remove}>Delete</button>
                <div>
                    {!getToFavorites.includes(item) && <button onClick={addToFavorites}>Add to favorites</button>}
                    {getToFavorites.includes(item) && <button onClick={removeFromFavorites}>Remove from favorites</button>}
                </div>
            </div>


        </div>
    );
};

export default SingleRecipe;