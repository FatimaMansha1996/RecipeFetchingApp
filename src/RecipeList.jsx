import React from "react";
import RecipeCard from "./RecipeCard";
import "./RecipeList.css";

function RecipeList({ recipes, onSelect }) {
  if (!recipes) return null; // initial load → show nothing

  // Loading state
  if (recipes.length === 1 && recipes[0].loading) {
    return <p className="loader">Loading recipes...</p>;
  }

  // No recipes found
  if (recipes.length === 0) return <p className="loader">No recipes found.</p>;

  // Show recipe cards
  return (
    <div className="recipe-list-container">
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
