


export default async function getTeamsDataFromApi() {
	try {
		const response = await fetch("http://localhost:8080/teams");
		return response.json();
	} catch (e) {
		console.error("FAILED", e);
	}


}
export async function getTeamDataFromApi(teamName, teamId) {
	try {
		const response = await fetch(`http://localhost:8080/info/${teamName}/${teamId}`);
		return response.json();
	} catch (e) {
		console.error("FAILED", e);
	}


}

export async function getRestoredDatabase() {
	try {
		const response = await fetch("http://localhost:8080/restore-database");
		return response.json();
	} catch (e) {
		console.error("FAILED", e);
	}


}

export async function editTeam(nameAbbreviation, teamId, editedTeam) {
	try {
		const response = await fetch(`http://localhost:8080/edit/${nameAbbreviation}/${teamId}`, {
			method: "PUT",
			body: editedTeam
		});

		return response.json();

	} catch (e) {
		console.error("FAILED", e);
	}
}

export async function addTeam(newTeam) {
	try {
		const response = await fetch("http://localhost:8080/add-team", {
			method: "POST",
			body: newTeam
		});
		return response.json();
	} catch (e) {
		console.error("FAILED", e);
	}
}

export async function deleteTeam(teamId) {
	try {
		const response = await fetch(`http://localhost:8080/delete/${teamId}`, {
			method: "DELETE",
		});
		return response.json();
	} catch (e) {
		console.error("FAILED", e);
	}
}
