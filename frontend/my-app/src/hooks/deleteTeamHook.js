import { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StateContext } from "../context/State-provider";
import { deleteTeam } from "../api/teams";
import mapTeamList from "../mapper/mapper";


export default function deleteTeamUseffect(){
	const navigate = useNavigate();
	const { dispatch } = useContext(StateContext);
	const { teamId } = useParams();


	useEffect(() => {
		const handleDelete = async () => {
			const response = await deleteTeam(teamId);
			const mappedTeamsList = mapTeamList(response);
            
			dispatch({ type: "SUCCESS", payload: mappedTeamsList });
			navigate("/?showToast=true&type=danger&message=Team deleted successfully");
		};
       
		handleDelete();
	});
}