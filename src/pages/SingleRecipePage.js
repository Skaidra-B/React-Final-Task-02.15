import React from 'react';
import {useParams} from "react-router-dom";
import SingleRecipeView from "../components/SingleRecipeView";

const SingleRecipePage = ({getRecipe}) => {

    const {url} = useParams()

    const recipe = getRecipe.find(x => x.url === url)

    return (
        <div>
            <SingleRecipeView item={recipe} />
        </div>
    );
};

export default SingleRecipePage;