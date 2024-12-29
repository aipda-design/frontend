import React, { useState } from "react";
import { CountriesContext } from "./context";
import { Countries, CountryData, ICountry, Infos } from "./Interface";

const countriesData: Countries[] = [
	{
		af: {
			lang: "fr",
			name: "Afrique",
			link: "/af",
			title: {
				t_1: "En Afrique,",
				t_2: "l’AIPDA soutien les acteurs du design.",
			},
			countries: {
				cameroun: "Cameroun",
				congo_B: "Congo Brazza",
				ivory_cost: "Côte d’Ivoire",
				mali: "Mali",

				faso: "fase",
				mada: "Madagascar",
			},
			infos: {
				infos_title: "Vous souhaitez rejoindre une représentation ?",
				infos_sub_title: "Suivez les étapes d’intégration :",
				liste: {
					arg_1: "Parcourez la liste des pays AIPDA",
					arg_2: "Sélectionnez votre pays",
					arg_3: "Remplissez le formulaire d’intégration",
					arg_4: "Cliquez sur ”Envoyer” pour valider l’intégration",
				},
			},
			bgHeader: "afrique-Vert-blanc",
			bgColor: "afrique-Vert-fonce",
			textColor: "afrique-Vert-blanc",
			bgAccordion: "afrique-Vert-clair",
			defaultOf: "input-default-color",
		},
		eu: {
			lang: "fr",
			name: "Europe",
			link: "/eu",
			title: {
				t_1: "En Europe,",
				t_2: "l’AIPDA soutien les acteurs du design.",
			},
			countries: {
				france: "France",
				belgique: "Belgique",
				espagne: "Espagne",
				luxembourg: "Luxembourg",
			},
			infos: {
				infos_title: "Vous souhaitez rejoindre une représentation ?",
				infos_sub_title: "Suivez les étapes d’inscription :",
				liste: {
					arg_1: "Parcourez la liste des pays AIPDA",
					arg_2: "Sélectionnez votre pays",
					arg_3: "Remplissez le formulaire d’inscription",
					arg_4: "Cliquez sur ”Envoyer” pour valider l’inscription",
				},
			},
			bgHeader: "europe-blanc",
			bgColor: "europe-dark-bleu",
			textColor: "europe-blanc",
			bgAccordion: "europe-bleu-clair",
			defaultOf: "default-color",
		},
	},
];

export const ContextContries = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [getInfos, setGetInfos] = useState<Infos | undefined>(undefined);
	const [BContries, setBCountries] = useState<ICountry | undefined>(undefined);

	const getCountryByLink = (link: string): CountryData | undefined => {
		const continent = Object.entries(countriesData[0]).find(
			([_, country]) => country.link === link
		);
		if (continent) {
			setBCountries(continent[1].countries);
			setGetInfos(continent[1].infos);
			return continent[1];
		}
		return undefined;
	};

	return (
		<CountriesContext.Provider
			value={{
				BContries,
				countries: countriesData,
				getInfos,
				getCountryByLink,
			}}
		>
			{children}
		</CountriesContext.Provider>
	);
};
