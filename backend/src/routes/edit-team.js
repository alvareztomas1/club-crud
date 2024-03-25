const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");
const multer = require("multer");
const { editTeam, getTeamsList } = require("../services/teams");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads")
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name + "-" + file.originalname);
    }
});

const upload = multer({ storage: storage });



router.post("/:teamName/:id", upload.single("crestUrl"), (req, res) => {
    const { id } = req.params;
    const teamsListFilePath = path.join(__dirname, "../data/teams.json");
    const teamsListData = getTeamsList(teamsListFilePath);
    const selectedTeam = teamsListData.find((team) => team.id === Number(id));
    editTeam(req.body, selectedTeam, teamsListFilePath, teamsListData, req.file)
    
    res.setHeader('Content-Type', 'application/json')
    .status(200)
        .send(teamsListData);
   
});

module.exports = router;