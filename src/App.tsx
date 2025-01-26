import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./App.css";
import Page from "./page/Page";
import AfriquePages from "./page/AfriquePages";
import EuropePages from "./page/EuropePages";
import {ContextContries} from "./service/continentContexte/ContextContries";
import ErrorPage from "./page/ErrorPage";
import ResultPage from "./page/ResultPage";
import ContinentNotYet from "./page/ContinentNotYet";
import AboutPage from "./page/AboutPage";
import MissionPage from "./page/MissionPage";
import ProjetPage from "./page/ProjetPage";
import HomePage from "./page/HomePage";
import {UserContext} from "./service/userContexte/userContext";
import MentionLegal from "./page/MentionLegal";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Page/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: 'about',
                element: <AboutPage/>
            },
            {
                path: 'mission',
                element: <MissionPage/>
            },
            {
                path: "projets",
                element: <ProjetPage/>
            },
            {
                path: "mention-legal",
                element: <MentionLegal/>
            },
        ]

    },
    {
        path: "/af",
        element: <AfriquePages/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/eu",
        element: <EuropePages/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: '/result',
        element: <ResultPage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/otherContinent',
        element: <ContinentNotYet/>,
        errorElement: <ErrorPage/>
    },
]);

function App() {
    return (
        <UserContext>
            <ContextContries>
                <RouterProvider router={router}/>
            </ContextContries>
        </UserContext>
    );
}

export default App;
