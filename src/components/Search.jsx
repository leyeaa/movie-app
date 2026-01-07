import React from "react";

const Search = ({ searchTerms, setSearchTerms }) => {
  return (
    <div className="search">
      <div>
        <img src="./search.svg" alt="Search" />
        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerms}
          onChange={(e) => setSearchTerms(e.target.value)}
        />
      </div>
      {searchTerms}
    </div>
  );
};

export default Search;
