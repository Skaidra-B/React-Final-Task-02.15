import React, {useState} from 'react';
import {useContext, useRef} from 'react';
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";
import Ingredient from "./Ingredient";


const CreateRecipe = () => {


    const {getRecipe, setRecipe} = useContext(mainContext)
    const nav = useNavigate()

    const [getPhotos, setPhotos] = useState([])
    const [getIngredients, setIngredients] = useState([])
    const [getPrepStep, setPrepStep] = useState([])

    const [error, setError] = useState(null)

    const photoRef = useRef()
    const titleRef = useRef()
    const ingredientsRef = useRef()
    const prepTimeRef = useRef()
    const prepStepsRef = useRef()

    const recipe = {
        photos: getPhotos,
        title: "",
        url: "",
        ingredients: getIngredients,
        prepTime: "",
        prepSteps: getPrepStep,
        rate: null,
        review: [],
        avgRate: null,
        average: null
    }

    function addPhoto() {
        setPhotos([...getPhotos, photoRef.current.value])
        photoRef.current.value = ""
    }

    function addIngredients() {
        setIngredients([...getIngredients, ingredientsRef.current.value])
        ingredientsRef.current.value = ""
    }

    function addPrepSteps() {
        setPrepStep([...getPrepStep, prepStepsRef.current.value])
        prepStepsRef.current.value = ""
    }

    function createRecipe() {
        if (recipe.photos.length < 2) return setError("At least 2 photos")
        if (recipe.ingredients.length < 2) return setError("At least 2 ingredients")
        if (recipe.prepSteps.length === 0) return
        if (titleRef.current.value === "") return
        if (prepTimeRef.current.value === "") return

        recipe.title = titleRef.current.value
        recipe.prepTime = prepTimeRef.current.value
        recipe.url = titleRef.current.value.replace(/ /g, "-")

        setRecipe([...getRecipe, recipe])

        titleRef.current.value = ""
        prepTimeRef.current.value = ""
        nav('/')
    }

    return (
        <div className="d-flex column">
            {error && <div>{error}</div>}
            <div className="d-flex">
                <input type="text" ref={photoRef} placeholder="Upload photos (at least 2)"/>
                <button onClick={addPhoto}>ADD</button>
            </div>
            <input type="text" ref={titleRef} placeholder="Title"/>
            <div>
                <input type="text" ref={ingredientsRef} placeholder="Add ingredients (at least 2)"/>
                <button onClick={addIngredients}>ADD</button>
                <div className="d-flex">
                    {getIngredients.map((x, i) => <Ingredient item={x} key={i} index={i} setIngredients={setIngredients} getIngredients={getIngredients} />)}
                </div>

            </div>

            <input type="text" ref={prepTimeRef} placeholder="Preparation time"/>
            <div>
                <input type="text" ref={prepStepsRef} placeholder="Add preparation steps"/>
                <button onClick={addPrepSteps}>ADD</button>
            </div>
            <button onClick={createRecipe}>SUBMIT</button>
        </div>
    );
};

export default CreateRecipe;