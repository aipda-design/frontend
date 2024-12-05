import React from "react";
import { LineProps } from "../../types/goblalInterface";

/**
 * Cette fonction permet de mettre en place les lignes verticals comme on peut voir sur la maquette au niveau du header
 * @param width
 * @param height
 * @param color?
 * @returns
 */
const Line: React.FC<LineProps> = ({ width, height, className }) => {
	return (
		<>
			<div
				style={{
					width: `${width}px`, // Utilise les props width dynamiquement
					height: `${height}px`, // Utilise les props height dynamiquement
				}}
				className={className}
			/>
		</>
	);
};

export default Line;
