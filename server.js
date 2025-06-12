// server.js
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;
    console.log("Form submission:", name, email, message);
    res.status(200).send("Message received!");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

