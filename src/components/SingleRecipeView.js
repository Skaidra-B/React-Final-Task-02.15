import React, {useContext, useRef, useState} from 'react';
import mainContext from "../context/mainContext";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-regular-svg-icons'
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons"
import {faAngleRight} from "@fortawesome/free-solid-svg-icons"
import ReviewElement from "./ReviewElement";


const SingleRecipeView = ({item}) => {


    const {
        getToFavorites,
        setToFavorites,
        getRated1,
        setRated1,
        getRated2,
        setRated2,
        getRated3,
        setRated3,
        getRated4,
        setRated4,
        getRated5,
        setRated5,
    } = useContext(mainContext)

    const [currentImg, setCurrentImg] = useState(0)


    const commentRef = useRef()

    function addToFavorites() {
        const favorite = getToFavorites.find(x => x.title === item.title)

        if (favorite) {

        } else {
            setToFavorites([...getToFavorites, item])
        }
    }

    function removeFromFavorites() {
        setToFavorites(getToFavorites.filter(x => x.title !== item.title))
    }

    function rate1() {
        setRated1("yellow")
        setRated2("")
        setRated3("")
        setRated4("")
        setRated5("")
        item.rate = 1
    }

    function rate2() {
        setRated1("yellow")
        setRated2("yellow")
        setRated3("")
        setRated4("")
        setRated5("")
        item.rate = 2
    }

    function rate3() {
        setRated1("yellow")
        setRated2("yellow")
        setRated3("yellow")
        setRated4("")
        setRated5("")
        item.rate = 3
    }

    function rate4() {
        setRated1("yellow")
        setRated2("yellow")
        setRated3("yellow")
        setRated4("yellow")
        setRated5("")
        item.rate = 4
    }

    function rate5() {
        setRated1("yellow")
        setRated2("yellow")
        setRated3("yellow")
        setRated4("yellow")
        setRated5("yellow")
        item.rate = 5
    }

    function addReview() {

        const singleRating = {
            rating: item.rate, comment: commentRef.current.value
        }
        if (item.rate >= 1 && commentRef.current.value.length > 0) {
            item.review.push(singleRating)
        }
        commentRef.current.value = ""
        setRated1("")
        setRated2("")
        setRated3("")
        setRated4("")
        setRated5("")
    }

    function calcAverageRate() {
        let average = 0
        item.review.map(x => average += x.rating / item.review.length)
        item.avgRate = Math.round(average)
        item.average = average.toFixed(1)
        return Math.round(average)
    }


    return (
        <div className="singleRecipeCard">
            <div className="d-flex">
                <div className="carousel">
                    <FontAwesomeIcon onClick={() => {
                        currentImg > 0 && setCurrentImg(currentImg - 1)
                    }} className="arrow" icon={faAngleLeft}/>
                    <img src={item.photos[currentImg]} alt=""/>
                    <FontAwesomeIcon onClick={() => {
                        currentImg < item.photos.length - 1 && setCurrentImg(currentImg + 1)
                    }} className="arrow" icon={faAngleRight}/>
                </div>

                <div className="ml-50">
                    <div>
                        {item.review.length !== 0 && <div className="d-flex">
                            <div>Rating: {calcAverageRate()}</div>
                            <div>
                                {calcAverageRate() === 1 && <FontAwesomeIcon className="star yellow" icon={faStar}/>}
                                {calcAverageRate() === 2 &&
                                    <div className="d-flex"><FontAwesomeIcon className="star yellow" icon={faStar}/>
                                        <FontAwesomeIcon className="star yellow" icon={faStar}/>
                                    </div>}
                                {calcAverageRate() === 3 &&
                                    <div className="d-flex"><FontAwesomeIcon className="star yellow" icon={faStar}/>
                                        <FontAwesomeIcon className="star yellow" icon={faStar}/>
                                        <FontAwesomeIcon className="star yellow" icon={faStar}/>
                                    </div>}
                                {calcAverageRate() === 4 &&
                                    <div className="d-flex"><FontAwesomeIcon className="star yellow" icon={faStar}/>
                                        <FontAwesomeIcon className="star yellow" icon={faStar}/>
                                        <FontAwesomeIcon className="star yellow" icon={faStar}/>
                                        <FontAwesomeIcon className="star yellow" icon={faStar}/>
                                    </div>}
                                {calcAverageRate() === 5 &&
                                    <div className="d-flex"><FontAwesomeIcon className="star yellow" icon={faStar}/>
                                        <FontAwesomeIcon className="star yellow" icon={faStar}/>
                                        <FontAwesomeIcon className="star yellow" icon={faStar}/>
                                        <FontAwesomeIcon className="star yellow" icon={faStar}/>
                                        <FontAwesomeIcon className="star yellow" icon={faStar}/>
                                    </div>}
                            </div>
                            <div>({item.average})</div>
                        </div>}
                    </div>
                    <h2>{item.title}</h2>
                    <div>Ingredients: {item.ingredients.join(", ")}</div>
                    <div>Preparation time: {item.prepTime}</div>
                    <div>Preparation steps: {item.prepSteps.length}</div>
                    {!getToFavorites.includes(item) && <button onClick={addToFavorites}>Add to favorites</button>}
                    {getToFavorites.includes(item) &&
                        <button onClick={removeFromFavorites}>Remove from favorites</button>}
                </div>
            </div>
            <div>
                <div>
                    <FontAwesomeIcon onClick={rate1} style={{backgroundColor: getRated1}} className="star"
                                     icon={faStar}/>
                    <FontAwesomeIcon onClick={rate2} style={{backgroundColor: getRated2}} className="star"
                                     icon={faStar}/>
                    <FontAwesomeIcon onClick={rate3} style={{backgroundColor: getRated3}} className="star"
                                     icon={faStar}/>
                    <FontAwesomeIcon onClick={rate4} style={{backgroundColor: getRated4}} className="star"
                                     icon={faStar}/>
                    <FontAwesomeIcon onClick={rate5} style={{backgroundColor: getRated5}} className="star"
                                     icon={faStar}/>
                </div>
                <div className="d-flex">
                    <input type="text" ref={commentRef} placeholder="comment here"/>
                    <button onClick={addReview}>ADD</button>
                </div>
            </div>
            <div>
                {item.review.map((x, i) => <ReviewElement item={x} key={i}/>)}
            </div>

        </div>
    );
};

export default SingleRecipeView;