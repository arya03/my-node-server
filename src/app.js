const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Route for handling the form submission
app.post("/submit", (req, res) => {
  const teamType = req.body.team_type;
  const tlName = req.body.TLName;
  const engagementChannel = req.body.engagement_channel;
  const eventName = req.body.event_name;
  const engagementDate = req.body.engagement_date;
  const engagementStatus = req.body.engagement_status;
  const repName = String(req.body.rep_name);
  const objectives = req.body.objectives;
  const keyNotes = req.body.key_notes;

  console.log(
    `${teamType} ${tlName} ${engagementChannel} ${eventName} ${engagementDate} ${engagementStatus} ${repName}`
  );

  res.redirect("/thank_you");
});

// Route for thank you page
app.get("/thank_you", (req, res) => {
  res.send(
    "Engagement has been successfully submitted. Thank you for your submission!"
  );
});

// Home route
app.get("/", (req, res) => {
  res.send("Hello Arya!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
