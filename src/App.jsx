import React, { useState } from "react";
import Header from "./header";
import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import Loader from "./Loader";
import Error from "./Error";
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const fetchRecipes = async (searchTerm) => {
    setLoading(true);
    setError("");
    setRecipes([]);
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      if (!res.ok) throw new Error("Failed to fetch recipes");
      const data = await res.json();
      if (!data.meals) {
        setError("No recipes found!");
      } else {
        setRecipes(data.meals);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className= "app-container">
      
      <Header />
      <SearchBar onSearch={fetchRecipes} />
      {loading && <Loader />}
      {error && <Error message={error} />}
      <RecipeList
  recipes={recipes}
  onSelect={setSelectedRecipe}
  onBack={() => setRecipes([])} // clears the list
/>
      <RecipeDetails recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
    </div>
  );
}

export default App;
