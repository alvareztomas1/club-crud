const fs = require("fs");

function getTeamsList(path){
    return JSON.parse(fs.readFileSync(path, "utf-8"));
};
function addTeam(newTeam, teamsListFilePath, teamLogo, teamsList){
    newTeam.crestUrl = `http://localhost:8080/uploads/${newTeam.name}-${teamLogo.originalname}`
    newTeam.id =  Math.floor(Math.random() * Date.now());
    teamsList.push(newTeam);

    fs.writeFileSync(teamsListFilePath, JSON.stringify(teamsList));
}
function editTeam(editedData, teamToEdit, path, teamsList, newLogo){
    Object.keys(editedData).filter((data) => data !== "crestUrl").forEach((key) => {
        teamToEdit[key] = editedData[key];
    });
    if(newLogo){
        console.log("entra");
        teamToEdit.crestUrl = `http://localhost:8080/uploads/${editedData.name}-${newLogo.originalname}`
    }
    fs.writeFileSync(path, JSON.stringify(teamsList));
}
function deleteTeam(teamId, teamsList, teamsListFilePath){
    const newTeamsList = teamsList.filter((team) => team.id !== Number(teamId));
    fs.writeFileSync(teamsListFilePath, JSON.stringify(newTeamsList));
    return newTeamsList;
}

function saveChanges(teamsListFilePath, teamsData){
    fs.writeFileSync(teamsListFilePath, JSON.stringify(teamsData));
}

module.exports = { getTeamsList, addTeam, editTeam, deleteTeam, saveChanges };