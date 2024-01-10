import Team from "../entitites/Team";

function mapTeam(teamData){
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

export default function mapTeamList(teamsData){
	const mappedData = teamsData.map((team) => mapTeam(team));
	return mappedData;
}