import {Location} from "react-router-dom";

export const formatTile = (url: Location): string => {

    const format = url.pathname.split("/")

    return format.join('')
}