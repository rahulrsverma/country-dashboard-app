
import React from "react";

interface PopulationSortProps {
  onSort: (order: string) => void;
}

const PopulationSort: React.FC<PopulationSortProps> = ({ onSort }) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSort(event.target.value);
  };

  return (
    <div>
      <label> Population Sort: </label>
      <select onChange={handleSortChange}>
        <option value="default">Default</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default PopulationSort;
