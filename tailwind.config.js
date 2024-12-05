/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"afrique-Vert-fonce": "#001C00",
				"afrique-Vert-clair": "#076423",
				"afrique-vert-blanc": "#D3F1DC",
				"input-default-color": "#0B270B",

				// Palette AIPDA Europe
				"europe-blanc": "#CDCDEF",
				"europe-bleu-clair": "#0505C3",
				"europe-bleu-fonce": "#000827",

				// Palette AIPDA Monde
				"monde-noir": "#000827",
				"monde-gris": "#D4DEFF",
				// Default color
				"default-color": "#0A1231",
			},
			fontSize: {
				titleBig: [
					"82px",
					{
						lineHeight: "92px",
						letterSpacing: "-0.01em",
						fontWeight: "400",
					},
				],
				titleMedium: [
					"62px", // Taille de la police pour tablette
					{
						lineHeight: "72px",
						letterSpacing: "-0.01em",
						fontWeight: "400",
					},
				],
				titlePetite: [
					"42px",
					{
						lineHeight: "61px",
						letterSpacing: "-0.01em",
						fontWeight: "400",
					},
				],
			},
		},
	},
	plugins: [],
};
