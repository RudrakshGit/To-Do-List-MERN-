const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  try {
    const task = new Task({ userId: req.user.userId, text: req.body.text });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });

    if (task.userId.toString() !== req.user.userId)
      return res.status(401).json({ msg: 'Unauthorized' });

    // If text is provided, update the text; otherwise toggle completion
    if (req.body.text !== undefined) {
      task.text = req.body.text;
    } else {
      task.completed = !task.completed;
    }
    
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });

    if (task.userId.toString() !== req.user.userId)
      return res.status(401).json({ msg: 'Unauthorized' });

    await task.deleteOne();
    res.json({ msg: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
