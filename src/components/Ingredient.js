import React, {useContext} from 'react';


const Ingredient = ({item, index, getIngredients, setIngredients}) => {


    function remove() {
        const result = getIngredients.filter((x, i) => i !== index)
        setIngredients([...result])

    }

    return (
        <div className="mr-5">
            {item && <div className="d-flex">
                <div className="mr-5">{item}</div>
                <button onClick={remove}>X</button>
            </div>}
        </div>

    );
};

export default Ingredient;