import { useContext } from "react"; 
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeContext } from "./context/theme";
import { ProjectsProvider } from "./context/projects/context";
import { UsersProvider } from "./context/members/context";

const App = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<div className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}>
			<UsersProvider>
				<ProjectsProvider>
						<RouterProvider router={router} />
				</ProjectsProvider>
			</UsersProvider>
		</div>
	);
}

export default App;