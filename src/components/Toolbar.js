import React from 'react';
import {Link} from "react-router-dom";


const Toolbar = ({getToFavorites}) => {
    return (
        <div className="d-flex toolbar">
            <Link to="/create"><h3 className="mr20">Create Recipe</h3></Link>
            <Link to="/"><h3 className="mr20">All Recipes</h3></Link>
            <Link to="/favorites"><h3 className="mr20">Favorites</h3>
            </Link>
            <div>({getToFavorites.length})</div>
        </div>
    );
};

export default Toolbar;
