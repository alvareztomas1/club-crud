import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import TeamInfo from "./components/Team-Info/Team-Info";
import EditTeam from "./components/Edit-team/Edit-team";
import StateProvider from "./context/State-provider";
import AddTeam from "./components/Add-team/Add-Team";
import DeleteTeam from "./components/Delete-team/Delete-team";
import RestoreDatabase from "./components/Restore-database/Restore-database";



					
function App() {
	return (
		<Router>
			<StateProvider>
				<Routes> 
					<Route path="/" element={<Home />}/>
					<Route path="/info/:teamName/:teamId" element={<TeamInfo />}/>
					<Route path="/edit/:teamName/:teamId" element={ <EditTeam />}/>
					<Route path="/add-team" element={<AddTeam />}/>
					<Route path="/delete-team/:teamId" element={<DeleteTeam />}/>
					<Route path="/restore-database" element={<RestoreDatabase />}/>

				</Routes>
			</StateProvider>
		</Router>

	);
}
export default App;
