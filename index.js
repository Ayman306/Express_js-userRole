const express = require("express");
const app = express();
const { authCourse, authPage } = require("./middleware");
app.use(express.json());

app.get("/home", (req, res) => {
  res.json("Home Page");
});

app.get("/course/grades", authPage(["teacher", "admin"]), (req, res) => {
  res.json({
    karan: 100,
    jain: 50,
    colin: 80,
    jay: 90,
    jane: 70,
  });
});

app.get("/course/:number", authCourse, (req, res) => {
  const courseNumber = req.params.number;
  res.json(`Permission granted ${courseNumber}`);
});

app.get("*", (req, res) => {
  res.status(404).json({ msg: "404 Page not Found" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
