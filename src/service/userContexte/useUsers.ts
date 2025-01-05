import {useContext} from "react";
import {UserContexte} from "./context";

export const useUsers = () => {
    const context = useContext(UserContexte)
    if (context === undefined) {
        throw new Error("useUsers must be defined")

    }
    return context;
}