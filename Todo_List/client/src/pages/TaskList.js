import React, { useState, useRef, useEffect } from 'react';
import './TaskList.css';
import { FaTrash, FaCheck, FaArrowDown } from 'react-icons/fa';
import { getTasks, addTask, updateTask, deleteTask } from '../api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const taskListRef = useRef(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchTasks = async () => {
      if (!token) return;

      try {
        const data = await getTasks(token);
        console.log('Fetched Tasks:', data);

        setTasks(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setTasks([]);
      }
    };

    fetchTasks();
  }, [token]);

  const handleAddTask = async () => {
    if (newTask.trim() === '') return;

    console.log('Token Sent:', token);

    try {
      const task = await addTask(token, newTask);
      console.log('Task Added Response:', task);

      if (task && task._id) {
        setTasks((prevTasks) => [task, ...prevTasks]);
        setNewTask('');
      } else {
        console.error('Failed to add task:', task);
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  const toggleTaskCompletion = async (taskId) => {
    try {
      const updatedTask = await updateTask(token, taskId);
      setTasks((prevTasks) =>
        prevTasks
          .map((task) => (task._id === taskId ? updatedTask : task))
          .sort((a, b) => a.completed - b.completed)
      );
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(token, taskId);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleClearTasks = async () => {
    try {
      for (let task of tasks) {
        await deleteTask(token, task._id);
      }
      setTasks([]);
    } catch (error) {
      console.error('Error clearing tasks:', error);
    }
  };

  const scrollDown = () => {
    if (taskListRef.current) {
      taskListRef.current.scrollBy({ top: 100, behavior: 'smooth' });
    }
  };

  return (
    <div className="main-container">
      <h1 className="task-title">To-Do List</h1>
      <div className="auth-box">
        <div className="task-input-container">
          <input
            type="text"
            placeholder="Add a new task..."
            className="task-input"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button className="add-task-button" onClick={handleAddTask}>
            Add
          </button>
        </div>

        <div className="task-list" ref={taskListRef}>
          {tasks.map((task) => (
            <div key={task._id} className="task-item">
              <span
                className={`task-text ${
                  task.completed ? 'completed-task' : ''
                }`}
                onClick={() => toggleTaskCompletion(task._id)}
              >
                {task.completed ? <FaCheck className="task-check" /> : '⬜'}{' '}
                {task.text}
              </span>
              <FaTrash
                className="delete-task"
                onClick={() => handleDeleteTask(task._id)}
              />
            </div>
          ))}
        </div>

        {tasks.length > 3 && (
          <button className="scroll-down-button" onClick={scrollDown}>
            <FaArrowDown />
          </button>
        )}

        {tasks.length > 0 && (
          <button className="clear-list-button" onClick={handleClearTasks}>
            Clear List
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskList;
