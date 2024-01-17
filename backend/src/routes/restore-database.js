const express = require("express");
const path = require("path");
const router = express.Router();
const { getTeamsList } = require("../services/teams");

router.get("/", (req, res) => {
    const teamsListFilePath = path.join(__dirname, "../data/teams-backup.json"); 
    const teamsList = getTeamsList(teamsListFilePath);

    if(teamsList){
       /* res.header('Access-Control-Allow-Origin', '*'); 
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');*/ 
        res.setHeader('Content-Type', 'application/json')
            .status(200)
                .send(teamsList);

    }else{
        res.status(404).send("ERROR 404! Web not found");
    }
});

module.exports = router;