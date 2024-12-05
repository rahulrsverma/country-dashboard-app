
import { Country } from "./countryData";

export const regionFilter = (originalData: Country[], setFilteredData: (data: Country[]) => void) => {
  const handleRegionFilter = (selectedRegion: string) => {
    if (selectedRegion === "") {
      setFilteredData(originalData); 
    } else {
      const filtered = originalData.filter((country) => country.region === selectedRegion);
      setFilteredData(filtered);
    }
  };

  return { handleRegionFilter };
};
