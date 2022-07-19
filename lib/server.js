const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission",(request,response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission",(request,response) => {
    const mission = request.params.mission;
    const amount = ExplorerController.getExplorersAmountByMission(mission);
    response.json({mission:mission,quantity:amount});
});

app.get("/v1/explorers/usernames/:mission",(request,response) => {
    const mission = request.params.mission;
    const usernames = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission:mission,explorers:usernames});
});

app.get("/v1/fizzbuzz/:number",(request,response) => {
    const number = request.params.number;
    const trick = ExplorerController.applyValidationInNumber(number);
    response.json({score:number,trick:trick});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});