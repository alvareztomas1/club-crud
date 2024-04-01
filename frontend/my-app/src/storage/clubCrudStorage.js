export function loadTeams(){
	const teams = JSON.parse(localStorage.getItem("teams"));
	if(!teams){
		throw new Error("Couldn't get teams list");
	}
	return teams;
}
export function saveTeams(teams){

	if(typeof(teams) !== "object"){
		throw new Error("Teams must be an object");
	}

	localStorage.setItem("teams", JSON.stringify(teams));
    
}