import { Link, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import Logo from "../components/Logo";

const ResultPage = () => {
	const location = useLocation();

	const { option, continent } = location.state || {};

	console.log("option actuelle :", option);
	console.log("Contient actuelle :", continent);
	return (
		<Layout>
			<div className="mb-5">
				<Logo />
			</div>
			<div className="text-center text-europe-blanc">
				<h1 className="text-5xl">Merci pour votre inscription</h1>
				{continent && (
					<h2 className="text-2xl ">
						Votre Contient est :{" "}
						<span className="bg-gradient-to-r from-blue-500 via-red-600 to-purple-200 bg-clip-text text-transparent">
							{continent}
						</span>
					</h2>
				)}
				<p className="text-xl mt-2">
					{" "}
					Le bureau local du{" "}
					<span className="font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
						{option}
					</span>{" "}
					vous contactera.
				</p>
				<div className="mt-2">
					<p className="text-2xl">
						Alliance Internationale pour la Promotion du Design en Afrique{" "}
						<br />© Tous droits réservés 2024
					</p>
				</div>
				<div className="mt-2">
					<Link
						to={"/"}
						className="inline-flex text-europe-dark-bleu bg-europe-blanc hover:bg-europe-bleu-clair hover:text-europe-blanc focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
					>
						Retour au Menu
					</Link>
				</div>
			</div>
		</Layout>
	);
};

export default ResultPage;
