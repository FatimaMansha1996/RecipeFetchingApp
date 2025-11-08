import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim() !== "") {
      onSearch(term.trim());
    }
    setTerm("");
  };

  return (
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
