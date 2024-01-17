import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../context/State-provider";
import { getRestoredDatabase } from "../api/teams";
import mapTeamList from "../mapper/mapper";

export default function restoreDataBaseHook(){
	const navigate = useNavigate();
	const { dispatch } = useContext(StateContext);
	useEffect(() => {
    
		const handleRestoreDatabase = async () => {
			const restoredDatabase = await getRestoredDatabase();
			const mappedRestoredDatabase = mapTeamList(restoredDatabase);
			dispatch({type: "SUCCESS", payload: mappedRestoredDatabase});
			navigate("/?showToast=true&type=success&message=Database restored successfully");

		};

		handleRestoreDatabase(); 

	});
}