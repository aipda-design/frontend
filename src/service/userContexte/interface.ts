export interface IUsers {
    name: string;
    email: string;
    profession: string;
    countryName: string,
    continentName: string
}

export interface IUsersResult {
    id: number;
    name: string;
    email: string;
    profession: string;
    countryName: string,
    continentName: string
}

export interface IResponse {
    user?: IUsersResult;
    message: string;
}

export interface IContextUsers {
    handleSubmit: (data: IUsers) => Promise<void>
    message: string;
    results: IResponse | undefined;
}