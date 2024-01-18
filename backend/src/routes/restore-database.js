const express = require("express");
const path = require("path");
const router = express.Router();
const { getTeamsList, saveChanges } = require("../services/teams");

router.get("/", (req, res) => {
    const backupListFilePath = path.join(__dirname, "../data/teams-backup.json"); 
    const backupTeamsList = getTeamsList(backupListFilePath);
    const teamsDataFilePath = path.join(__dirname, "../data/teams.json");
    
    saveChanges(teamsDataFilePath, backupTeamsList)
    if(backupTeamsList){
        res.setHeader('Content-Type', 'application/json')
            .status(200)
                .send(backupTeamsList);

    }else{
        res.status(404).send("ERROR 404! Web not found");
    }
});

module.exports = router;