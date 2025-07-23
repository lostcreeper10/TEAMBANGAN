const express = require("express");
const app = express ();
const PORT = 5000;

const profile = require ("./lolskie.json");

app.get("/api/get-profile", (req, res) => {
    res.json(profile);
});

app.listen(PORT, function () {
    console.log(`http://localhost: ${PORT}`);
});