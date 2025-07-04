import React from "react";

function Filter({
  searchTitle,
  setSearchTitle,
  searchRating,
  setSearchRating,
}) {
  return (
    <div style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Rechercher par titre..."
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
        style={{ marginRight: 10, padding: 5 }}
      />

      <select
        value={searchRating}
        onChange={(e) => setSearchRating(Number(e.target.value))}
        style={{ padding: 5 }}
      >
        <option value={0}>Toutes les notes</option>
        <option value={1}>1 et plus</option>
        <option value={2}>2 et plus</option>
        <option value={3}>3 et plus</option>
        <option value={4}>4 et plus</option>
        <option value={5}>5 uniquement</option>
      </select>
    </div>
  );
}

export default Filter;
