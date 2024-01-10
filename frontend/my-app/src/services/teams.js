import { loadTeams, saveTeams } from "../storage/clubCrudStorage";
import getTeamsDataFromApi from "../api/teams";

export async function getTeamsList() {
	try {
		return loadTeams();
	} catch (e) {

		const teams = await getTeamsDataFromApi();
		saveTeams(teams);
		return teams;
	}
}

export function getSelectedTeam(teamsList, selectedTeamId){
	return teamsList.find((team) => team.id === Number(selectedTeamId));
}