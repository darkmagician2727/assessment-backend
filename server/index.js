const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getRandomFortune, addFortune, getIDFortune } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getRandomFortune);
app.post("/api/fortune", addFortune);
app.post("/api/fortuneID", getIDFortune);

app.listen(4000, () => console.log("Server running on 4000"));
