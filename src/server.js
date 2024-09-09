const express = require("express");

const app = express();

// http://localhost/beetlejuice  web url exxample
app.use("/beetlejuice", express.static("beetlejuice"));
app.use("/about", express.static("beetlejuice"))

app.listen(5000, () => {
 console.log("server is listening on port 5000")
});
