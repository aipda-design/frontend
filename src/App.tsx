import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Page from "./page/Page";
import AfriquePages from "./page/AfriquePages";
import EuropePages from "./page/EuropePages";
import { ContextContries } from "./service/ContextContries";
import ErrorPage from "./page/ErrorPage";
import ResultPage from "./page/ResultPage";
import ContinentNotYet from "./page/ContinentNotYet";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Page />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/af",
		element: <AfriquePages />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/eu",
		element: <EuropePages />,
		errorElement: <ErrorPage />,
	},{
		path:'/result',
		element:<ResultPage/>,
		errorElement:<ErrorPage/>
	},
	{
		path:'/otherContinent',
		element:<ContinentNotYet/>,
		errorElement:<ErrorPage/>
	}
]);

function App() {
	return (
		<ContextContries>
			<RouterProvider router={router} />
		</ContextContries>
	);
}

export default App;
