import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  // creating a state for term
  const [term, setTerm] = useState("");
// handling the search button 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim() !== "") {
      onSearch(term.trim());
    }
    setTerm("");
  };

  return (
    // Search button
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search recipes e.g., chicken, pasta..."
        className="search-input"
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
}

export default SearchBar;
