import React from "react";
import { InfosSetuupI } from "../../types/goblalInterface";
import ellipse from "../../assets/images/ellipse.svg";

//ce tableau c'est juste pour rajouter du dynamise
const infosSetup: InfosSetuupI[] = [
	{ num: 1, textContent: "Parcourez la liste des pays AIPDA" },
	{ num: 2, textContent: "Sélectionnez votre pays" },
	{ num: 3, textContent: "Remplissez le formulaire d’inscription" },
	{ num: 4, textContent: "Cliquez sur ”Envoyer” pour valider l’inscription" },
];

//Il faudrait mettre les coleur
/**
 * c'est tout ce qui est numerotation
 * @returns 0
 */
const InfosBloc = () => {
	return (
		<div>
			<p className="text-[17px] font-bold leading-[26px]">
				Vous souhaitez rejoindre une représentation ?
			</p>
			<p className="text-[17px] font-normal leading-[26px] mb-[38px]">
				Suivez les étapes d’inscription :
			</p>

			<div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
				{infosSetup.map((infos, index) => (
					<div key={index} className="flex items-center mb-[10px] ">
						<div
							className="relative h-[37px] w-[37px]
"
						>
							<img
								src={ellipse}
								alt="ellipse"
								className="object-contain h-full w-full"
							/>
							<span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
								{infos.num}
							</span>
						</div>

						<p className="text-[12px] font-normal ml-3 max-w-[125px] lg:max-w-[380px] lg:text-[17px]">
							{infos.textContent}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default InfosBloc;
{
	/*
	
	<div className="relative w-[37px] h-[37px]">
							<img
								src={ellipse}
								alt="ellispe"
								className="object-cover h-full w-full"
							/>

							<span
								className="text-[16px] font-black leading-[24px] absolute left-[50%] top-[50%]
                                        transform -translate-x-[50%] -translate-y-[50%] text-white"
							>
								{infos.num}
							</span>
						</div>*/
}
