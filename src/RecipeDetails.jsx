import React from "react";
import "./RecipeDetails.css";

function RecipeDetails({ recipe, onClose }) {
  // If no recipe is selected, don't render anything
  if (!recipe) return null;
// Create an array to store ingredients and measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) ingredients.push(`${ingredient} - ${measure}`);
  }

  return (
    <div className="recipe-details">
      <button className="close-button" onClick={onClose}>Close</button>
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.strInstructions}</p>
      {recipe.strYoutube && (
        <p>
          YouTube Tutorial: <a href={recipe.strYoutube} target="_blank" rel="noreferrer" style={{ color: "#ff7043" }}>Watch Video</a>
        </p>
      )}
    </div>
  );
}

export default RecipeDetails;
