import React, {useState} from "react";
import {UserContexte} from "./context";
import {IResponse, IUsers} from "./interface";
import axios from "axios";


export const UserContext = ({children}: { children: React.ReactNode }) => {

    //const [utilisateur, setUtilisateur] = useState<IUsers | undefined>(undefined);
    const [results, setResults] = useState<IResponse | undefined>(undefined);
    const [message, setMessage] = useState<string>("");

    /* const insertUser = (data: IUsers): string => {
         setUtilisateur(data)
         return "Demande envoyé";
     }*/

    const handleSubmit = async (data: IUsers) => {
        try {
            if (!data) {
                setMessage("Aucune donnée dans les champs")
                return;
            }
            console.log("data envoyer est  : ", data);
            const responseData = await axios.post('http://localhost:8000/api/users', data)
            const response = await responseData.data;
            setResults(response)

        } catch (e) {
            console.log("Error en la contexte", e)
        }
    }
    return (
        <UserContexte.Provider value={{handleSubmit, message, results}}>
            {children}
        </UserContexte.Provider>
    );
};

