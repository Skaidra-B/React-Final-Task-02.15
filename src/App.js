import './App.css';
import mainContext from "./context/mainContext";
import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RecipeListPage from "./pages/RecipeListPage";
import CreateRecipePage from "./pages/CreateRecipePage";
import FavoritesPage from "./pages/FavoritesPage";
import SingleRecipePage from "./pages/SingleRecipePage";
import Toolbar from "./components/Toolbar";


function App() {

    const [getRecipe, setRecipe] = useState([])
    const [getToFavorites, setToFavorites] = useState([])

    const [getIngredientFilter, setIngredientFilter] = useState("")
    const [getAmountFilter, setAmountFilter] = useState("")
    const [getPrepTimeFilter, setPrepTimeFilter] = useState("")
    const [getReviewsFilter, setReviewsFilter] = useState("")
    const [getRatingFilter, setRatingFilter] = useState("")

    const [getRated1, setRated1] = useState("")
    const [getRated2, setRated2] = useState("")
    const [getRated3, setRated3] = useState("")
    const [getRated4, setRated4] = useState("")
    const [getRated5, setRated5] = useState("")


    return (
        <div className="App">
            <mainContext.Provider value={{
                getRecipe,
                setRecipe,
                getToFavorites,
                setToFavorites,
                getIngredientFilter,
                setIngredientFilter,
                getAmountFilter,
                setAmountFilter,
                getPrepTimeFilter,
                setPrepTimeFilter,
                getReviewsFilter,
                setReviewsFilter,
                getRatingFilter,
                setRatingFilter,
                getRated1,
                setRated1,
                getRated2,
                setRated2,
                getRated3, setRated3, getRated4, setRated4, getRated5, setRated5
            }}>
                <BrowserRouter>
                    <Toolbar getToFavorites={getToFavorites}/>
                    <Routes>
                        <Route path="/" element={<RecipeListPage getRecipe={getRecipe}/>}/>
                        <Route path="/favorites" element={<FavoritesPage getToFavorites={getToFavorites}/>}/>
                        <Route path="/recipe/:url" element={<SingleRecipePage getRecipe={getRecipe}/>}/>
                        <Route path="/create" element={<CreateRecipePage/>}/>
                    </Routes>
                </BrowserRouter>
            </mainContext.Provider>
        </div>
    );
}

export default App;
