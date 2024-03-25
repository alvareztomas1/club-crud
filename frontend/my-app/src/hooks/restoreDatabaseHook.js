import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../context/State-provider";
import { handleRestoreDatabase } from "../services/restore-database/restore-database";




export default function restoreDataBaseHook(getRestoredDatabase, mapTeamList) {
	const navigate = useNavigate();
	const { dispatch } = useContext(StateContext);

	

	handleRestoreDatabase(getRestoredDatabase, mapTeamList, dispatch, navigate);


}