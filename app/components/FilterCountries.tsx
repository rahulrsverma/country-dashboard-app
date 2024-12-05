
import React from "react";

interface FilterCountriesProps {
  regions: string[];
  onFilter: (region: string) => void;
}

const FilterCountries: React.FC<FilterCountriesProps> = ({ regions, onFilter }) => {
  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilter(event.target.value);
  };

  return (
    <div>
      <label> Region List: </label>
      <select onChange={handleRegionChange}>
        <option value=""> Select Region Name</option>
        {regions.map((region, index) => (
          <option key={index} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCountries;
