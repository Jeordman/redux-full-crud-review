require("dotenv").config();
const express = require("express");
const massive = require("massive");

const cc = require("./controllers/carController");

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("DB CONNECTED");
});

app.use(express.json());

//endpoints
app.get("/api/cars", cc.getCars);
app.post("/api/cars", cc.addCar);
app.delete("/api/cars/:id", cc.deleteCar);
app.put("/api/cars/:id", cc.editCarInfo);


app.listen(SERVER_PORT, () => {
  console.log("Server listening on", { SERVER_PORT });
});
