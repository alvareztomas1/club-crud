import React from "react";
import Loading from "../Loading";
import Title from "./Title";
import TeamsList from "./TeamsList";
import MyToast from "../Toast";
import { StateContext } from "../../context/State-provider";
import useHomeEffect from "../../hooks/useHomeEffect";
import { useContext } from "react";
import paramSearch from "../../services/params";
import AddTeamButton from "./Add-team-button";
import RestoreButton from "./Restore-button";


function Home() {
	const { state, dispatch } = useContext(StateContext);
	const showToastParam = paramSearch("showToast");
	const typeParam = paramSearch("type");
	const messageParam = paramSearch("message");

	useHomeEffect(state, dispatch); 

	

	return (
		<div id="home">
			<title> Club CRUD Web </title>
			<Title />
			<AddTeamButton />
			<RestoreButton />
			<Loading loading={state.loading} />
			<TeamsList teamsData={state.data} />
			<MyToast  type={typeParam} showToast={showToastParam} text={messageParam}/>
		</div>
	);
}
  
export default Home;