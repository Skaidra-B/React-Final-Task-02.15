import React from 'react';
import Favorite from "../components/Favorite";


const FavoritesPage = ({getToFavorites}) => {
    return (
        <div>
            <div className="d-flex wrap">
                {getToFavorites.map((x, i) => <Favorite item={x} index={i} key={i}/>)}
            </div>
        </div>

    );
};

export default FavoritesPage;