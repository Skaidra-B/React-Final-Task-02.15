import React, {useContext} from 'react';
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";


const Favorite = ({item, index}) => {

    const nav = useNavigate()
    const {getToFavorites, setToFavorites} = useContext(mainContext)

    function remove() {
        const result = getToFavorites.filter((x, i) => i !== index)
        setToFavorites([...result])
    }

    return (
        <div className="recipeCard">
            <img src={item.photos[0]} onClick={() => nav('/recipe/'+item.url)} alt=""/>
            <h2>{item.title}</h2>
            <div>Ingredients: {item.ingredients.map((x, i) => <ul key={i}>{x}</ul>)}</div>
            <div>Preparation time: {item.prepTime}</div>
            <div>Preparation steps: {item.prepSteps.length}</div>
            <div>Reviews: {item.review.length}</div>
            <div>Rating: {item.avgRate}</div>
            <button onClick={remove}>Remove</button>
        </div>
    );
};

export default Favorite;
