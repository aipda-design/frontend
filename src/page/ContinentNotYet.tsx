import React, { FormEvent, useEffect, useState } from "react";
import { paysAsie, paysAmerique } from "../utils/table";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Logo from "../components/Logo";

const continents = [
	{
		link: "am",
		title: "Amérique",
	},
	{
		link: "as",
		title: "Asie",
	},
];

const ContinentNotYet = () => {
	const [continent, setContinent] = useState<string>("");
	const [countries, setCountries] = useState<string[]>([]);
	const [country, setCountry] = useState<string>("");
	const navigate = useNavigate();

	useEffect(() => {
		if (continent) {
			// Vérifie si un continent est sélectionné
			setCountries(continent === "Asie" ? paysAsie : paysAmerique);
		} else {
			setCountries([]); // Important de vider le tableau si aucun continent n'est sélectionné
		}
	}, [continent]);

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setContinent(event.target.value);
		setCountry("");
	};

	const handleCOuntryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setCountry(event.target.value);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("je le continent :", continent);

		navigate("/result", { state: { option: country, continent: continent } });
	};

	return (
		<Layout>
			<div>
				<Logo />
			</div>

			<div className="relative w-auto my-6 mx-auto max-w-3xl">
				{/*content*/}
				<form
					onSubmit={handleSubmit}
					className="max-w-sm mx-auto border-0 rounded-lg shadow-lg relative flex flex-col  bg-europe-blanc text-blueGray-200 outline-none focus:outline-none w-[98%]"
				>
					{/*header*/}
					<div className="flex items-start justify-between p-5 border-b border-solid border-europe-dark-bleu rounded-t">
						<h3 className={`text-3xl font-semibold text-europe-dark-bleu`}>
							Autres Continents
						</h3>
						<button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
							<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
								×
							</span>
						</button>
					</div>
					{/*body*/}
					<div className="relative p-6 flex-auto">
						<div className={`border-b border-europe-dark-bleu py-3`}>
							<input
								type="text"
								className={`
									appearance-none bg-transparent border-none w-full placeholder-europe-dark-bleu text-europe-dark-bleu font-normal
										mr-3 py-1 px-2 leading-tight focus:outline-none 
										`}
								placeholder="Nom et prenoms"
								aria-label="name"
							/>
						</div>
						<div className={`border-b border-europe-dark-bleu py-2 `}>
							<input
								type="email"
								className={`
									appearance-none bg-transparent border-none w-full placeholder-europe-dark-bleu text-europe-dark-bleu font-normal
										mr-3 py-1 px-2 leading-tight focus:outline-none 
										`}
								placeholder="Email"
								aria-label="email "
							/>
						</div>
						<div className={`border-b border-europe-dark-bleu py-3`}>
							<input
								type="text"
								className={`
									appearance-none bg-transparent border-none w-full placeholder-europe-dark-bleu text-europe-dark-bleu font-normal
										mr-3 py-1 px-2 leading-tight focus:outline-none 
										`}
								placeholder="Profession"
								aria-label="Profession"
							/>
						</div>

						<div className="mt-3">
							<select
								className="block w-full p-2 mb-6  sm:py-3 sm:px-4  text-europe-blanc bg-europe-dark-bleu border-europe-dark-bleu rounded-lg text-sm   dark:bg-europe-blanc overflow-hidden "
								value={continent}
								onChange={handleChange}
							>
								<option defaultValue={"Open this select menu"}>
									Selectionner un continent
								</option>
								{continents.map((continent, index) => (
									<option key={index} value={continent.title}>
										{continent.title}
									</option>
								))}
							</select>
						</div>

						{continent && (
							<div className="w-full max-w-sm min-w-[200px] py-3 px-3">
								<label
									htmlFor="country-select"
									className="block text-sm font-medium mb-1 text-europe-dark-bleu"
								>
									Selectionner un pays
								</label>
								<div className="relative">
									<select
										id="country-select"
										className="
                            w-full bg-europe-blanc text-gray-700 border border-europe-dark-bleu rounded-md shadow-sm 
                            focus:outline-none
                            text-sm p-2.5 appearance-none cursor-pointer
                        "
										size={6} // Définit 6 options visibles avant scroll
										style={{
											maxHeight: "10rem", // Hauteur maximale pour activer le scroll
											overflowY: "auto", // Active le scroll vertical
										}}
										onChange={handleCOuntryChange}
										value={country}
									>
										{countries?.map((country, index) => (
											<option
												key={index}
												value={country}
												className={`py-1 px-2 border-b-[0.5px] border-europe-dark-bleu hover:bg-europe-blanc hover:text-europe-dark-bleu active:bg-europe-blanc focus:bg-europe-blanc`}
											>
												{country}
											</option>
										))}
									</select>
									<div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-gray-400"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth="2"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</div>
								</div>
							</div>
						)}
					</div>
					{/*footer*/}
					<div className="flex items-center justify-end p-6 border-t border-solid border-europe-dark-bleu rounded-b">
						<button
							onClick={() => navigate("/")}
							className="text-europe-dark-bleu background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
							type="button"
						>
							retour
						</button>
						<button
							className="bg-europe-blanc border-[1px] border-europe-dark-bleu text-europe-dark-bleu hover:bg-europe-dark-bleu hover:text-europe-blanc active:bg-europe-dark-bleu font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
							type="submit"
						>
							Envoyer
						</button>
					</div>
				</form>
			</div>
		</Layout>
	);
};

export default ContinentNotYet;
