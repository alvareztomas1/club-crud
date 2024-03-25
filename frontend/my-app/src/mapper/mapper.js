import Team from "../entitites/Team";

export function mapTeam(teamData){
	const {
		id,
		name,
		tla,
		crestUrl,
		address,
		phone,
		website,
		email,
		founded,
		venue,
	} = teamData;

	return new Team(
		id,
		name,
		tla,
		crestUrl,
		address,
		phone,
		website,
		email,
		founded,
		venue,
	);
}

export default function mapTeamsList(teamsData){
	const mappedData = teamsData.map((team) => mapTeam(team));
	return mappedData;
}