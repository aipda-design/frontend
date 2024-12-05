import Accordion from "./Accordion";
import { TitleArray } from "../../types/goblalInterface";
import { useState } from "react";

const titleArray: TitleArray[] = [
	{ id: 1, title: "Cameroun" },
	{ id: 2, title: "Congo Brazza" },
	{ id: 3, title: "Côte d’Ivoire" },
	{ id: 4, title: "Mali" },

    { id: 5, title: "RDC" },
    { id: 6, title: "TOGO" },
    { id: 7, title: "SENEGAL" },
];

const AccordionComponent = () => {
	const [openAccordion, setOpenAccordion] = useState<number | null>(null);
	//const [hidden, setHidden] = useState<boolean>(false);

	const toggleAccordion = (id: number) => {
		if (openAccordion === id) {
			// Ferme l'accordéon si déjà ouvert
			setOpenAccordion(null);
		} else {
			// Ouvre l'accordéon
			setOpenAccordion(id);
		}
	};
	return (
		<>
			{/*Avant il y'avait un min-h-[343px]  min-h-[152px] */}
			<div className="bg-afrique-Vert-clair rounded-lg lg:h-auto max-h-[305px] px-3 overflow-y-scroll flex flex-col ">
				{titleArray.map((title, index) => (
					<Accordion
						title={title.title}
						key={index}
						isOpen={openAccordion === title.id}
						onClick={() => toggleAccordion(title.id)}
						hidden={openAccordion !== null && openAccordion !== title.id} // Cache les autres boutons lorsque l'un est ouvert
					/>
				))}
			</div>
		</>
	);
};

export default AccordionComponent;
