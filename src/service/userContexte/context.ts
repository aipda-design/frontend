import {createContext} from "react";
import {IContextUsers} from "./interface";

export const UserContexte = createContext<IContextUsers | undefined>(undefined)