const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./DB/connect");
const port = 3000;
require("./DB/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);

app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`app running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
