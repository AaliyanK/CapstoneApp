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

// const spreadsheetId = "1I8DBbBf5wydmlYsRciUo5ytwt4SmV2S068g4f3aulgM";
const spreadsheetId = "1KtJCshfChRwK7DrOdo-WFDZIO0ZhBuGKJH_bGOX5D8Y";

app.post("/test", (req, res) => {
  const response = googleSheetsInstance.spreadsheets.values.get({
    auth, //auth object
    spreadsheetId, // spreadsheet id
    // range: `Sheet1!A${req.body.rowIndex}:N${req.body.rowIndex}`, //Update for sheets
    range: `Sheet1!A2:K`, // May need to change SHEET name manually
  });

  // TODO:
  // Need to only display cell density. Once adrian finished, I will update code

  response.then((result) => {
    if (result.data.values) {
      const rows = result.data.values;

      const nonEmptyRows = rows.filter((row) =>
        row.some((cell) => cell !== "")
      );

      const slicedRows = nonEmptyRows.slice(-500);

      console.log(slicedRows.length);

      res.json({ data: slicedRows });

      // res.json({ data: result.data.values[0] });
    } else {
      res.json({ data: [] }); // Send back response that there are no usable excel entries anymore!
    }
  });
});

server.listen(PORT, () => console.log(`listening on port ${PORT}`));

// Try pulling entire dataset everytime to get the latest value (once every 2 minutes)
// pull Filled values that havnt been pulled yet (with counter) (this is one every couple seconds)
// The intention is to make sure that there is no delay
// Change api to take in every second, make sure no errors occur. Make sure adrian changes arduino to slow down.
// Essentially wanna make it as real-time as possible

// Problem: React application can only handle 500 data points on the graph
// Do we want to take all nonempty row values every 20 seconds?
// Do we want to take one row at a time and keep updating the component?

// Do we want to slice last 500 values in the backend? This is if the user just needs to see the most recent values - CURRENT SOLUTION

// Adrian talk (do a video demo):
// So I set up the app to take in the 500 most recent values in the dataset
// This way every time we get a new value, the app will catch it, and a max of 500 values will be displayed
// And this fixes the 30 second delay that we wouldve had before if we counted one value at a time
// Now the last issue we're running into is that we can only display 500 values which is all that the graph can handle
// Is there something that can be done with the arduino here? You mentioned something about measurement intervals
// Say your arduino slows down to collect a data point each minute, this way by the time the batch is complete, we'd have less data points but it would all fit into the graph
// Need to test in a real environment to make sure we get the interface we need for the interval measurement
