import React from 'react';
import SingleRecipe from "../components/SingleRecipe";
import Filter from "../components/Filter";


const RecipeListPage = ({getRecipe}) => {


    return (
        <div>
            <div className="allRecipes">
                {getRecipe.length !== 0 && <Filter/>}

            </div>
        </div>


    );
};

export default RecipeListPage;