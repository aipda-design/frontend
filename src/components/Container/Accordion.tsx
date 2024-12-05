import React from "react";
import { IoSendSharp } from "react-icons/io5";
import { AccordionProps } from "../../types/goblalInterface";

const Accordion: React.FC<
	AccordionProps & {
		isOpen: boolean;
		onClick: () => void;

		hidden: boolean;
	}
> = ({ title, isOpen, onClick, hidden }) => {
	return (
		<>
			{/*
					isActive ? order-first : order-none"*/}
			<div
				className={`py-2 transition-all duration-300 ease-in-out $ ${
					hidden ? "hidden" : "block"
				}`}
			>
				<button
					className="flex w-full justify-between items-center"
					onClick={onClick}
				>
					<span className=" text-[40px]">{title}</span>
					{/*Mettre un svg pour faire en sort que ça devienne smooth */}

					{isOpen ? (
						<span
							id="icon-2"
							className="text-slate-800 transition-transform duration-300"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="w-[24px] h-[24px]"
							>
								<path d="M2.75 7.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5Z" />
							</svg>
						</span>
					) : (
						<span
							id="icon-1"
							className="text-slate-800 transition-transform duration-300"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="w-[24px] h-[24px]"
							>
								<path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
							</svg>
						</span>
					)}
				</button>
				{/*J'ai rajouter un min-h-[230px] pour que les informations fit avec l'écran */}
				<div
					className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
						isOpen
							? "grid-rows-[1fr] opacity-100 min-h-[230px]"
							: "grid-rows-[0fr] opacity-0"
					}`}
				>
					<form className="flex flex-col justify-around h-full overflow-hidden ">
						{/*Mettre en place en fonction de la couleur  */}
						<div className="border-b border-teal-200">
							<input
								type="text"
								className="appearance-none bg-transparent border-none w-full text-gray-700
                 mr-3 py-1 px-2 leading-tight focus:outline-none "
								placeholder="Nom et prenoms"
								aria-label="name"
							/>
						</div>
						<div className="border-b border-teal-200">
							<input
								type="email"
								className="appearance-none bg-transparent border-none w-full text-gray-700
                 mr-3 py-1 px-2 leading-tight focus:outline-none "
								placeholder="Email"
								aria-label="email "
							/>
						</div>
						<div className="border-b border-teal-200">
							<input
								type="text"
								className="appearance-none bg-transparent border-none w-full text-gray-700
                 mr-3 py-1 px-2 leading-tight focus:outline-none "
								placeholder="Profession"
								aria-label="Profession "
							/>
						</div>
						{/*Voir comment utiliser diirectement les svg en tout cas gerer un etet pour les couleur  */}
						<button className="flex items-center px-2 border-2 rounded-md h-[49px] border-afrique-Vert-fonce">
							<span className="font-bold">Envoyer</span>
							<IoSendSharp />
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Accordion;
