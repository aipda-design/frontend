import Line from "./Line";
import { Language } from "../../types/goblalInterface";

//cette objet permet de mettre nen place la ligne dans le composant Lang
const langLine = {
	width: 1,
	height: 15,
};

const languages: Language[] = [
	{ code: "FR", label: "Français" },
	{ code: "EN", label: "English" },
];

/**
 * Ce composant gère tout ce qui est langue
 *  On peut le retrouver dans : components/Header
 */
const Lang = () => {
	return (
		<>
			<div className="inline-flex p-2 items-center">
				{languages.map((language, index) => (
					<>
						<div
							key={index}
							className="group cursor-pointer flex flex-col justify-center items-center gap-[1px] w-[40px] h-[40px] py-[8px] px-[11px] "
						>
							<span
								className="text-sm/[14px] leading-normal font-normal group-hover:font-bold group-hover:scale-110"
								aria-label={`Langue : ${language.label}`}
							>
								{language.code}
							</span>
							<Line
								width={18}
								height={4}
								className="shrink-0 opacity-0 group-hover:opacity-100  group-hover:bg-afrique-Vert-fonce group-focus:opacity-100 transition-opacity duration-300"
							/>
						</div>
						{index < languages.length - 1 && (
							<Line
								width={langLine.width}
								height={langLine.height}
								className="bg-afrique-Vert-fonce"
							/>
						)}
					</>
				))}

				{/*<div className="group cursor-pointer flex flex-col justify-center items-center gap-[1px] w-[40px] h-[40px] py-[8px] px-[11px] ">
					<span className="text-sm/[14px] leading-normal font-normal group-hover:font-bold group-hover:scale-110">
						EN
					</span>
					<Line
						width={18}
						height={4}
						className="shrink-0 opacity-0 group-hover:opacity-100 group-hover:bg-afrique-Vert-fonce  group-focus:opacity-100 transition-opacity duration-300"
					/>
				</div>*/}
			</div>
		</>
	);
};

export default Lang;
