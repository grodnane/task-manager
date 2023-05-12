const getAllTasks = (req, res) => {
  res.send("all items from the file");
};

const createTask = (req, res) => {
  res.send(req.body);
};
const getTaskById = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTaskById = (req, res) => {
  res.send("update task by id");
};

const deleteTaskById = (req, res) => {
  res.send("delete a task by it´s id");
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
};
