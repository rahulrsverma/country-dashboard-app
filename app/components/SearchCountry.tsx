
import React from "react";

interface SearchCountryProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

const SearchCountry: React.FC<SearchCountryProps> = ({ searchTerm, onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      <label>Search by Name or Capital: </label>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search..." />
    </div>
  );
};

export default SearchCountry;
