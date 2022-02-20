import React, {useContext, useRef, useEffect} from 'react';
import mainContext from "../context/mainContext";
import SingleRecipe from "./SingleRecipe";

const Filter = () => {

    useEffect(() => {

        setIngredientFilter("")
        setAmountFilter("")
        setPrepTimeFilter("")
        setReviewsFilter("")
        setRatingFilter(rates.current.value)

    }, [])

    const {
        getRecipe,
        getIngredientFilter,
        setIngredientFilter,
        getAmountFilter,
        setAmountFilter,
        getPrepTimeFilter,
        setPrepTimeFilter,
        getReviewsFilter,
        setReviewsFilter,
        getRatingFilter,
        setRatingFilter
    } = useContext(mainContext)

    const ingredient = useRef()
    const amount = useRef()
    const prepTime = useRef()
    const reviews = useRef()
    const rates = useRef()

    function filter() {
        setIngredientFilter(ingredient.current.value)
        setAmountFilter(amount.current.value)
        setPrepTimeFilter(prepTime.current.value)
        setReviewsFilter(reviews.current.value)
        setRatingFilter(rates.current.value)
    }

    const filtered = getRecipe.filter(x => {
        if (getIngredientFilter === "" && getAmountFilter === "" && getPrepTimeFilter === "" && getReviewsFilter === "" && Number(getRatingFilter) === 0) {
            return x
        }
        /////// po viena
        if (getIngredientFilter.length > 0 && getAmountFilter === "" && getPrepTimeFilter === "" && getReviewsFilter === "" && Number(getRatingFilter) === 0) {
            return x.ingredients.includes(getIngredientFilter)
        }
        if (getIngredientFilter === "" && getAmountFilter.length > 0 && getPrepTimeFilter === "" && getReviewsFilter === "" && Number(getRatingFilter) === 0) {
            return x.ingredients.length === Number(getAmountFilter)
        }
        if (getIngredientFilter === "" && getAmountFilter === "" && getPrepTimeFilter.length > 0 && getReviewsFilter === "" && Number(getRatingFilter) === 0) {
            return x.prepTime === getPrepTimeFilter
        }
        if (getIngredientFilter === "" && getAmountFilter === "" && getPrepTimeFilter === "" && getReviewsFilter.length > 0 && Number(getRatingFilter) === 0) {
            return x.review.length === Number(getReviewsFilter)
        }
        if (getIngredientFilter === "" && getAmountFilter === "" && getPrepTimeFilter === "" && getReviewsFilter === "" && Number(getRatingFilter) !== 0) {
            return x.avgRate === Number(getRatingFilter)
        }
        ///////////////////
        if (getIngredientFilter.length > 0 && getAmountFilter.length > 0 && getPrepTimeFilter === "" && getReviewsFilter === "" && Number(getRatingFilter) === 0) {
            return x.ingredients.includes(getIngredientFilter) && x.ingredients.length === Number(getAmountFilter)
        }
        if (getIngredientFilter.length > 0 && getAmountFilter.length > 0 && getPrepTimeFilter.length > 0 && getReviewsFilter === "" && Number(getRatingFilter) === 0) {
            return x.ingredients.includes(getIngredientFilter) && x.ingredients.length === Number(getAmountFilter) && x.prepTime === getPrepTimeFilter
        }
        if (getIngredientFilter.length > 0 && getAmountFilter.length > 0 && getPrepTimeFilter.length > 0 && getReviewsFilter.length > 0 && Number(getRatingFilter) === 0) {
            return x.ingredients.includes(getIngredientFilter) && x.ingredients.length === Number(getAmountFilter) && x.prepTime === getPrepTimeFilter && x.review.length === Number(getReviewsFilter)
        }
        if (getIngredientFilter.length > 0 && getAmountFilter.length > 0 && getPrepTimeFilter.length > 0 && getReviewsFilter.length > 0 && Number(getRatingFilter) !== 0) {
            return x.ingredients.includes(getIngredientFilter) && x.ingredients.length === Number(getAmountFilter) && x.prepTime === getPrepTimeFilter && x.review.length === Number(getReviewsFilter) && x.avgRate === Number(getRatingFilter)
        }
        /////////////////////
        if (getIngredientFilter === "" && getAmountFilter === "" && getPrepTimeFilter === "" && getReviewsFilter.length > 0 && Number(getRatingFilter) !== 0) {
            return x.review.length === Number(getReviewsFilter) && x.avgRate === Number(getRatingFilter)
        }
        if (getIngredientFilter === "" && getAmountFilter === "" && getPrepTimeFilter.length > 0 && getReviewsFilter.length > 0 && Number(getRatingFilter) !== 0) {
            return x.prepTime === getPrepTimeFilter && x.review.length === Number(getReviewsFilter) && x.avgRate === Number(getRatingFilter)
        }
        if (getIngredientFilter === "" && getAmountFilter.length > 0 && getPrepTimeFilter.length > 0 && getReviewsFilter.length > 0 && Number(getRatingFilter) !== 0) {
            return x.ingredients.length === Number(getAmountFilter) && x.prepTime === getPrepTimeFilter && x.review.length === Number(getReviewsFilter) && x.avgRate === Number(getRatingFilter)
        }
        ////////////////////
        if (getIngredientFilter.length > 0 && getAmountFilter === "" && getPrepTimeFilter.length > 0 && getReviewsFilter === "" && Number(getRatingFilter) !== 0) {
            return x.ingredients.includes(getIngredientFilter) && x.prepTime === getPrepTimeFilter && x.avgRate === Number(getRatingFilter)
        }
        if (getIngredientFilter === "" && getAmountFilter.length > 0 && getPrepTimeFilter === "" && getReviewsFilter.length > 0 && Number(getRatingFilter) === 0) {
            return x.ingredients.length === Number(getAmountFilter) && x.review.length === Number(getReviewsFilter)
        }
        if (getIngredientFilter === "" && getAmountFilter.length > 0 && getPrepTimeFilter.length > 0 && getReviewsFilter === "" && Number(getRatingFilter) === 0) {
            return x.ingredients.length === Number(getAmountFilter) && x.prepTime === getPrepTimeFilter
        }
        if (getIngredientFilter === "" && getAmountFilter.length > 0  && getPrepTimeFilter.length > 0 && getReviewsFilter.length > 0 && Number(getRatingFilter) === 0) {
            return x.ingredients.length === Number(getAmountFilter) && x.prepTime === getPrepTimeFilter && x.review.length === Number(getReviewsFilter)
        }
        if (getIngredientFilter.length > 0 && getAmountFilter === "" && getPrepTimeFilter === "" && getReviewsFilter === "" && Number(getRatingFilter) !== 0) {
            return x.ingredients.includes(getIngredientFilter) && x.avgRate === Number(getRatingFilter)
        }
        if (getIngredientFilter === "" && getAmountFilter.length > 0 && getPrepTimeFilter === "" && getReviewsFilter.length > 0 && Number(getRatingFilter) !== 0) {
            return x.ingredients.length === Number(getAmountFilter) && x.review.length === Number(getReviewsFilter) && x.avgRate === Number(getRatingFilter)
        }
        if (getIngredientFilter.length > 0 && getAmountFilter.length > 0 && getPrepTimeFilter === "" && getReviewsFilter.length > 0 && Number(getRatingFilter) === 0) {
            return x.ingredients.includes(getIngredientFilter) && x.ingredients.length === Number(getAmountFilter) && x.review.length === Number(getReviewsFilter)
        }
        if (getIngredientFilter.length > 0 && getAmountFilter.length > 0 && getPrepTimeFilter === "" && getReviewsFilter === "" && Number(getRatingFilter) !== 0) {
            return x.ingredients.includes(getIngredientFilter) && x.ingredients.length === Number(getAmountFilter) && x.avgRate === Number(getRatingFilter)
        }
        if (getIngredientFilter === "" && getAmountFilter === "" && getPrepTimeFilter.length > 0 && getReviewsFilter.length > 0 && Number(getRatingFilter) === 0) {
            return x.prepTime === getPrepTimeFilter && x.review.length === Number(getReviewsFilter)
        }
        if (getIngredientFilter === "" && getAmountFilter === "" && getPrepTimeFilter.length > 0 && getReviewsFilter === "" && Number(getRatingFilter) !== 0) {
            return x.prepTime === getPrepTimeFilter && x.avgRate === Number(getRatingFilter)
        }
        if (getIngredientFilter === "" && getAmountFilter.length > 0 && getPrepTimeFilter === "" && getReviewsFilter === "" && Number(getRatingFilter) !== 0) {
            return x.ingredients.length === Number(getAmountFilter) && x.avgRate === Number(getRatingFilter)
        }
        if (getIngredientFilter === "" && getAmountFilter.length > 0 && getPrepTimeFilter.length > 0 && getReviewsFilter === "" && Number(getRatingFilter) !== 0) {
            return x.ingredients.length === Number(getAmountFilter) && x.prepTime === getPrepTimeFilter && x.avgRate === Number(getRatingFilter)
        }
        if (getIngredientFilter.length > 0 && getAmountFilter === "" && getPrepTimeFilter === "" && getReviewsFilter.length > 0 && Number(getRatingFilter) === 0) {
            return x.ingredients.includes(getIngredientFilter) && x.review.length === Number(getReviewsFilter)
        }
        if (getIngredientFilter.length > 0 && getAmountFilter === "" && getPrepTimeFilter === "" && getReviewsFilter.length > 0 && Number(getRatingFilter) !== 0) {
            return x.ingredients.includes(getIngredientFilter) && x.review.length === Number(getReviewsFilter) && x.avgRate === Number(getRatingFilter)
        }
        if (getIngredientFilter.length > 0 && getAmountFilter === "" && getPrepTimeFilter.length > 0 && getReviewsFilter === "" && Number(getRatingFilter) === 0) {
            return x.ingredients.includes(getIngredientFilter) && x.prepTime === getPrepTimeFilter
        }
        if (getIngredientFilter.length > 0 && getAmountFilter === "" && getPrepTimeFilter.length > 0 && getReviewsFilter.length > 0 && Number(getRatingFilter) === 0) {
            return x.ingredients.includes(getIngredientFilter) && x.prepTime === getPrepTimeFilter && x.review.length === Number(getReviewsFilter)
        }
        if (getIngredientFilter.length > 0 && getAmountFilter === "" && getPrepTimeFilter.length > 0 && getReviewsFilter.length > 0 && Number(getRatingFilter) !== 0) {
            return x.ingredients.includes(getIngredientFilter) && x.prepTime === getPrepTimeFilter && x.review.length === Number(getReviewsFilter) && x.avgRate === Number(getRatingFilter)
        }
        if (getIngredientFilter.length > 0 && getAmountFilter.length > 0 && getPrepTimeFilter === "" && getReviewsFilter.length > 0 && Number(getRatingFilter) !== 0) {
            return x.ingredients.includes(getIngredientFilter) && x.ingredients.length === Number(getAmountFilter) && x.review.length === Number(getReviewsFilter) && x.avgRate === Number(getRatingFilter)
        }
        if (getIngredientFilter.length > 0 && getAmountFilter.length > 0 && getPrepTimeFilter.length > 0 && getReviewsFilter === "" && Number(getRatingFilter) !== 0) {
            return x.ingredients.includes(getIngredientFilter) && x.ingredients.length === Number(getAmountFilter) && x.prepTime === getPrepTimeFilter && x.avgRate === Number(getRatingFilter)
        }
    })

    return (
        <div>
            <div className="filter">
                <input ref={ingredient} type="text" placeholder="ingredient"/>
                <input ref={amount} type="number" placeholder="amount of ingredients"/>
                <input ref={prepTime} type="text" placeholder="preparation time"/>
                <input ref={reviews} type="number" placeholder="reviews"/>
                <input ref={rates} type="range" min="0" max="5" step="1" defaultValue={0}/>
                <button onClick={filter}>Search</button>
            </div>
            <div  className="d-flex wrap">
                {filtered.map((x, i) =>
                    <SingleRecipe item={x} key={i} index={i}/>)}
            </div>
        </div>
    );
};

export default Filter;