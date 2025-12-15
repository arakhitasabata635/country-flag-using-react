function SearchInput({ setQuerry }) {
  return (
    <div className="search">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        onChange={(e) => setQuerry(e.target.value.toLowerCase())}
        className="search-input"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default SearchInput;
