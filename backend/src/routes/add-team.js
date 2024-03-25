const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { addTeam, getTeamsList } = require("../services/teams");

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads")
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name + "-" + file.originalname);
    }
});

const upload = multer({ storage: storage });


router.post("/", upload.single("crestUrl"), (req, res) => {
    const teamsListFilePath = path.join(__dirname, "../data/teams.json");
    const teamsListData = getTeamsList(teamsListFilePath);

    addTeam(req.body, teamsListFilePath, req.file, teamsListData);
    
    res.setHeader('Content-Type', 'application/json')
    .status(200)
        .send(teamsListData);
});

module.exports = router;

