import React from "react";
import "./RecipeCard.css";

function RecipeCard({ recipe, onSelect }) {
  return (
    // creating the recipe card
    <div className="recipe-card" onClick={() => onSelect(recipe)}>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strMeal}</h3>
    </div>
  );
}

export default RecipeCard;
