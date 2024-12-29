import Box from "../components/Box";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const data = [
	{
		title: "AIPDA AFRIQUE",
		link: "af",
		buttonContent: "Rejoindre une représentation africaine",
		bgColor: "afrique-Vert-fonce",
		textColor: "afrique-vert-blanc",
		insideColor: "afrique-Vert-clair",
	},
	{
		title: "AIPDA EUROPE",
		link: "eu",
		buttonContent: "Rejoindre une représentation européenne",
		bgColor: "europe-bleu-fonce",
		textColor: "europe-blanc",
		insideColor: "europe-bleu-clair",
	},
	{
		title: "AIPDA AMERIQUE",
		link: "am",
		buttonContent: "Rejoindre une représentation américaine",
		bgColor: "amerique-rouge-fonce",
		textColor: "amerique-blanc",
		insideColor: "amerique-rouge-clair",
	},
	{
		title: "AIPDA ASIE",
		link: "as",
		buttonContent: "Rejoindre une représentation asiatique",
		bgColor: "asie-jaune-fonce",
		textColor: "asie-blanc",
		insideColor: "asie-jaune-clair",
	},
];
export default function Page() {
	return (
		<div className="bg-[#AEC1FF] min-h-screen lg:h-screen flex items-center justify-center w-full p-1 md:p-2">
			<div
				className="bg-monde-bleu-fonce min-h-[calc(100vh-16px)] 2xl:h-[calc(100vh-36px)] flex  items-center rounded-[28px]  m-2 w-full 
			"
			>
				<div className="flex flex-col items-center gap-8  3xl:gap-[80px] p-4 2xl:p-8 2xl:h-[calc(100vh-36px)]  w-full max-w-[1206px] mx-auto">
					<Logo />
					<div className="flex flex-col items-center gap-4 ">
						{/*avant max-w-[688px]px*/}
						<div className="text-[14px] lg:text-[16px] max-w-[541px] space-y-4">
							<p className="text-center text-[#AEC1FF]">
								Rejoignez la représentation AIPDA de votre région et devenez
								membre d'un réseau de plus de 500 acteurs engagés pour
								promouvoir le design en Afrique et dans les territoires
								afrodescendants. En intégrant une représentation, vous aurez
								l'opportunité, pendant un mois, de plonger dans l'univers de
								l'Alliance Internationale pour la Promotion du Design en Afrique
								(AIPDA). Découvrez nos projets et contribuez activement à cette
								dynamique collective.
							</p>
						</div>
					</div>

					<div className="group grid gap-3 md:gap-4 md:grid grid-cols-2 lg:flex flex-wrap justify-center p-2">
						{data.map((infos, index) => (
							<Box
								key={index}
								title={infos.title}
								actionAnnonce={infos.buttonContent}
								insideColor={infos.insideColor}
								textColor={infos.textColor}
								bgColor={infos.bgColor}
								link={infos.link}
							/>
						))}
					</div>
					<Link
						to={"/otherContinent"}
						className="text-[#AEC1FF] text-center md:text-left"
					>
						<span className="">Votre région n’est pas encore active </span>
						<span className=" underline font-bold block md:inline-block">
							Enregistrez-vous ici
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
