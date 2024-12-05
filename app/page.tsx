// page.tsx
"use client";
import React from "react";
import CountryCards from "./components/CountryCards";
import "./styles/global.css";
import FilterCountriesByRegion from "./components/FilterCountries";
import SearchCountryByName from "./components/SearchCountry";
import { countryData } from "./function/countryData";
import ErrorBoundaries from "./components/ErrorBoundaries";
import SortByPopulation from "./components/PopulationSort";

const HomePage: React.FC = () => {
  const { filteredData, regions, isLoading, error, filters, updateFilters } = countryData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <ErrorBoundaries>
      <FilterCountriesByRegion
        regions={regions}
        onFilter={(region) => updateFilters({ region })}
      />
      <SearchCountryByName
        searchTerm={filters.searchTerm}
        onSearch={(term) => updateFilters({ searchTerm: term })}
      />
      <SortByPopulation
        onSort={(order) => updateFilters({ sortOrder: order })}
      />
      <div className="grid">
        {filteredData.map((country) => (
          <CountryCards key={country.name.common} country={country} />
        ))}
      </div>
    </ErrorBoundaries>
  );
};

export default HomePage;
