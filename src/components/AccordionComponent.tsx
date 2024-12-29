import React, { useState } from "react";
import Accordion from "./Accordion";
import { useCountries } from "../service/useContries";

interface IAccordion {
	bgColor: string | undefined;
	textColor?: string | undefined;
	lineColor?: string;
}
const AccordionComponent: React.FC<IAccordion> = ({
	bgColor,
	textColor,
	lineColor,
}) => {
	const [openAccordion, setOpenAccordion] = useState<number | null>(null);
	const { BContries } = useCountries();
	//const [hidden, setHidden] = useState<boolean>(false);
	console.log("BContries", BContries);
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
			{/**
			 * 		className={`bg-${bgColor} rounded-lg lg:rounded-3xl max-h-[334px] px-3 lg:px-[50px] overflow-y-scroll flex flex-col xl:max-h-[282px] flex-auto border-2 border-${lineColor} shadow-lg`}
				
			 */}
			<div
				className={`bg-${bgColor} rounded-[14px] lg:rounded-3xl max-h-[283px]  px-3 lg:px-[50px]  flex flex-col xl:max-h-[334px] flex-auto   scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-h-2 scrollbar scrollbar-thumb-${textColor} scrollbar-track-${bgColor} scrollbar-visible overflow-y-scroll `}
			>
				{BContries &&
					Object.entries(BContries).map((title, index) => (
						<React.Fragment key={index}>
							<Accordion
								title={title[1]}
								key={index}
								isOpen={openAccordion === index + 1}
								onClick={() => toggleAccordion(index + 1)}
								hidden={openAccordion !== null && openAccordion !== index + 1} // Cache les autres boutons lorsque l'un est ouvert
								textColor={textColor}
								formTextColor={bgColor}
								lineColor={lineColor}
							/>
						</React.Fragment>
					))}
			</div>
		</>
	);
};

export default AccordionComponent;
