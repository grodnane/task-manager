const mongoose = require("mongoose");
const env = require("dotenv");

const conectionString = `mongodb+srv://grodnane:u407XTVDEVPDBi39@task-manager.l5owi34.mongodb.net/task-manager?retryWrites=true&w=majority`;

const connectDB = (url) => {
  return mongoose.connect(conectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
