import { useContext } from "react";
import { CountriesContext } from "./context";

// Custom hook to use the countries context
export const useCountries = () => {
	const context = useContext(CountriesContext);
	if (context === undefined) {
		throw new Error("useCountries must be used within a CountriesProvider");
	}
	return context;
};
