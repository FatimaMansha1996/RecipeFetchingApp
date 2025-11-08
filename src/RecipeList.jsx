import React from "react";
import RecipeCard from "./RecipeCard";
import "./RecipeList.css";

function RecipeList({ recipes, onSelect, onBack }) {
  if (!recipes || recipes.length === 0) return null;

  return (
    <div className="recipe-list-container">
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} onSelect={onSelect} />
        ))}
      </div>

      {/* Back Button */}
      <button className="back-button" onClick={onBack}>
        🔙 Back
      </button>
    </div>
  );
}

export default RecipeList;
