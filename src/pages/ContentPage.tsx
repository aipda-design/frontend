import React from "react";
import Title from "../components/Container/Title";
import HommeSageAf from "../assets/bgimages/web-af-rectangle-img-2.png";
import EnfantSageAf from "../assets/bgimages/web-af-rectangle-img-1.png";
import InfosBloc from "../components/Container/InfosBloc";
import AccordionComponent from "../components/Container/AccordionComponent";
import HeaderComponent from "../components/Header/HeaderComponent";

//Dans cette page
export const ContentPage = () => {
	return (
		<>
			{/*a savoir avant il y'a un h-screen */}
			<div className="bg-amber-400 min-h-screen">
				<HeaderComponent />
				<div className="lg:grid lg:grid-cols-2">
					<div className="flex flex-col md:flex-row px-4 py-3 md:py-24 gap-6 lg:py-3">
						<div className="flex-1 space-y-6">
							<Title />
							<div className="relative w-40 h-40 overflow-hidden hidden lg:block  lg:w-[150px] lg:h-[130px] 2xl:w-[300px] 2xl:h-auto lg:absolute lg:bottom-0 lg:left-0 xl:w-[250px] xl:h-auto">
								<img
									src={HommeSageAf}
									alt="Visuel homme"
									className="object-cover w-full h-auto"
								/>
							</div>
						</div>
					</div>
					<div className="flex-1  p-3 rounded-lg space-y-6 lg:py-3 z-10">
						<div className="relative">
							<InfosBloc />
							<div className="absolute -top-[0.8rem]  bottom-0 w-32 h-32 rounded-tl-[50%] overflow-hidden hidden lg:block lg:-right-[12px] lg:-top-[0.8rem] lg:w-[150px] lg:h-[130px] lg:z-0 xl:w-[250px] xl:h-[230px] ">
								<img
									src={EnfantSageAf}
									alt="Visuel enfant"
									className="object-cover w-full h-full"
								/>
							</div>
						</div>

						<AccordionComponent />
					</div>
				</div>
			</div>
		</>
	);
};
