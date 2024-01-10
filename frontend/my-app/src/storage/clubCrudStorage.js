/*export function savePokemons(offset, limit, pokemons){
    if(offset === undefined || limit === undefined || typeof(pokemons) !== "object"){
        throw new Error("offset and limit must  be defined");
    }
    try{
        localStorage.setItem(`pokemons_${offset}_${limit}`, JSON.stringify(pokemons));

    }catch(e){
        localStorage.clear();
    }
};

export function loadPokemons(offset, limit){
    if(offset === undefined || limit === undefined){
        throw new Error("offset and limit must  be defined");
    };

    const pokemons = JSON.parse(localStorage.getItem(`pokemons_${offset}_${limit}`));

    return pokemons;
};

*/

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