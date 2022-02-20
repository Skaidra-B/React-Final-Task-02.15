import React, {useState, useEffect} from 'react';
import {useContext, useRef} from 'react';
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";
import Ingredient from "./Ingredient";


const CreateRecipe = ({}) => {


    // useEffect(() => {
    //     setError()
    // }, [])

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
        // photos: [],
        photos: getPhotos,
        title: "",
        url: "",
        // ingredients: [],
        ingredients: getIngredients,
        prepTime: "",
        // prepSteps: [],
        prepSteps: getPrepStep,
        rate: null,
        review: [],
        avgRate: null,
        average: null
    }

    function addPhoto() {
        // recipe.photos.push(photoRef.current.value)
        setPhotos([...getPhotos, photoRef.current.value])
        // console.log(recipe.photos)
        photoRef.current.value = ""
    }

    function addIngredients() {
        // recipe.ingredients.push(ingredientsRef.current.value)
        setIngredients([...getIngredients, ingredientsRef.current.value])
        // console.log(recipe.ingredients)
        ingredientsRef.current.value = ""
    }

    function addPrepSteps() {
        // recipe.prepSteps.push(prepStepsRef.current.value)
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

        setPhotos([])
        setIngredients([])
        setPrepStep([])

        titleRef.current.value = ""
        prepTimeRef.current.value = ""
        console.log(recipe)
        console.log(getRecipe)
        // nav('/')
    }

    return (
        <div className="d-flex column">
            {error && <div>{error}</div>}
            <div className="d-flex">
                <input type="text" ref={photoRef} placeholder="Upload photos"/>
                <button onClick={addPhoto}>ADD</button>
            </div>
            <input type="text" ref={titleRef} placeholder="Title"/>
            <div>
                <input type="text" ref={ingredientsRef} placeholder="Add ingredients"/>
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