import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import './App.css';

function App() {
  // Initial state = null (no search yet)
  const [recipes, setRecipes] = useState(null);
  const [error, setError] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const fetchRecipes = async (searchTerm) => {
    setError("");
    setRecipes([]); // clear previous recipes
    try {
      // Optional: show loading in RecipeList by setting a temporary state
      setRecipes([{ loading: true }]);
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      if (!res.ok) throw new Error("Failed to fetch recipes");
      const data = await res.json();
      setRecipes(data.meals || []); // array of recipes or empty array
    } catch (err) {
      setRecipes([]); // empty array triggers “No recipes found”
      setError(err.message);
    }
  };

  return (
    <div className="app-container">
      <Header />
      <SearchBar onSearch={fetchRecipes} />

      {/* Inline error */}
      {error && <p className="error-message">⚠️ {error}</p>}

      <RecipeList recipes={recipes} onSelect={setSelectedRecipe} />

      <RecipeDetails recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
    </div>
  );
}

export default App;
