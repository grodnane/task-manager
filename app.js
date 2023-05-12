const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./DB/connect");
const port = 3000;
require("./DB/connect");

//middleware

app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});
app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`app running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
