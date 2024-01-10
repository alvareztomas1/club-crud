const express = require("express");
const fs = require("fs");
const path = require("path");
const { getTeamsList, deleteTeam } = require("../services/teams");

const router = express.Router();




router.delete("/:teamId", (req, res) => {
    const { teamId } = req.params;

    const teamsListFilePath = path.join(__dirname, "../data/teams.json");
    const teamsListData = getTeamsList(teamsListFilePath);
    const newTeamsList = deleteTeam(teamId, teamsListData, teamsListFilePath);
    
    res.setHeader('Content-Type', 'application/json')
    .status(200)
        .send(newTeamsList);
});

module.exports = router;