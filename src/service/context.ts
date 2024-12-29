import { createContext } from "react";
import { CountriesContextType } from "./Interface";

export const CountriesContext = createContext<CountriesContextType | undefined>(
	undefined
);
