const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const { google } = require("googleapis");
const keys = require("./credentials.json");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 5000; //see below

// Will have
// {
//   index
// interval
// }
io.connections = {};

const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json", //the key file
  //url to spreadsheets API
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});

//Auth client Object
const authClientObject = auth.getClient();

//Google sheets instance
const googleSheetsInstance = google.sheets({
  version: "v4",
  auth: authClientObject,
});

const spreadsheetId = "1I8DBbBf5wydmlYsRciUo5ytwt4SmV2S068g4f3aulgM";

const readData = googleSheetsInstance.spreadsheets.values.get({
  auth, //auth object
  spreadsheetId, // spreadsheet id
  range: "Sheet1!A2:N2", //range of cells to read from.
});

const returnReadData = () => {};

console.log(
  readData.then((result) => {
    console.log(result.data.values[0]);
  })
);

//Read from the spreadsheet

// Get number of rows, create for loop that goes over each in backend, and return to frontend
// for i in range(1, num rows, +1) {
//   socket.emit(each entry)
// }

io.on("connection", (client) => {
  // setInterval(() => {
  //   client.emit("getSheetData", "HELLO");

  //   client.on("recieveSheetData", (recieveSheetData) => {
  //     console.log(recieveSheetData);
  //   });
  // }, 2000);

  // console.log("NEW CONNECTION");
  client.on("connect", () => {
    console.log("Connected");
  });

  client.on("disconnect", () => {
    console.log("DISCONNECTED");
  });
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

server.listen(PORT, () => console.log(`listening on port ${PORT}`));
