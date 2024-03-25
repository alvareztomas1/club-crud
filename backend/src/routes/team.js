const express = require("express");
const path = require("path");
const router = express.Router();
const { getTeamsList } = require("../services/teams");

router.get('/:teamName/:id', (req, res) => {
    const { id } = req.params;
    const teamsListFilePath = path.join(__dirname, "../data/teams.json");
    const teamsList = getTeamsList(teamsListFilePath);
    const selectedTeam = teamsList.find((team) => team.id === Number(id));


    if(selectedTeam){
        res.setHeader('Content-Type', 'application/json').status(200).send(selectedTeam);

    }else{
        res.status(404).send("ERROR 404! Web not found");
    }
});

module.exports = router;