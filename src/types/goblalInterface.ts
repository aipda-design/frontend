//Header interface

/** Cette interface elle permet de contrôler les props de composant line
 * qui est dans : components/Header/
 *width: number;
 * height: number;
 * color?:string (cette valeur n'est pas obligatoire)
 * 

*/
export interface LineProps {
	width: number;
	height: number;
	color?: string;
	className?: string;
}

/**
 * Interface concernant les an
 */
export interface Language {
	code: string;
	label: string;
}

/**
 * Interface pour les infos setup
 * utiliser dans component/Container/infosBloc
 */
export interface InfosSetuupI {
	num: number;
	textContent: string;
}


export interface AccordionProps{
    title:string
  }
  
export interface TitleArray{
    id:number,
    title:string
}