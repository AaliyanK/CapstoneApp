const express = require("express");
const http = require("http");
const { google } = require("googleapis");
const keys = require("./credentials.json");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const server = http.createServer(app);

const PORT = process.env.PORT || 5000; //see below

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

app.post("/test", (req, res) => {
  const rows = googleSheetsInstance.spreadsheets.values.get({
    auth, //auth object
    spreadsheetId, // spreadsheet id
    range: `Sheet1!A${req.body.rowIndex}:N${req.body.rowIndex}`, //Update for sheets
  });

  // TODO:
  // Need to only display cell density. Once adrian finished, I will update code

  rows.then((result) => {
    if (result.data.values) {
      res.json({ data: result.data.values[0] });
    } else {
      res.json({ data: [] }); // Send back response that there are no usable excel entries anymore!
    }
  });
});

server.listen(PORT, () => console.log(`listening on port ${PORT}`));
