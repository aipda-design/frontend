export interface ITitle {
	t_1: string;
	t_2: string;
}

interface Liste {
	arg_1: string;
	arg_2: string;
	arg_3: string;
	arg_4: string;
}

export interface Infos {
	infos_title: string;
	infos_sub_title: string;
	liste: Liste;
}

export interface ICountry {
	[key: string]: string;
}
export interface CountryData {
	lang: string;
	name: string;
	link: string;
	title: ITitle;
	countries: {
		[key: string]: string;
	};
	infos: Infos;
	bgHeader: string;
	bgColor: string;
	textColor: string;
	bgAccordion: string;
	defaultOf?: string;
}

export interface Countries {
	af: CountryData;
	eu: CountryData;
	am?: CountryData;
	as?: CountryData;
}

export interface CountriesContextType {
	BContries: ICountry | undefined;
	countries: Countries[];
	getInfos: Infos | undefined;
	getCountryByLink: (link: string) => CountryData | undefined;
}
