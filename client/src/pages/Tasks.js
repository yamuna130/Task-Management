import React, { useEffect, useState } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from './api/api';
import { useNavigate } from 'react-router-dom';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const fetchTasks = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/tasks`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.status === 401) {
      navigate('/');
    } else {
      const data = await res.json();
      setTasks(data);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title: newTask }),
    });

    if (res.ok) {
      setNewTask('');
      fetchTasks();
    }
  };

  const deleteTask = async (id) => {
    await fetch(`${process.env.REACT_APP_API_BASE_URL}/tasks/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchTasks();
  };

  const updateTask = async (id, updatedData) => {
    await fetch(`${process.env.REACT_APP_API_BASE_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    });
    fetchTasks();
  };

  const handleEdit = (task) => {
    setEditingId(task._id);
    setEditText(task.title);
  };

  const saveEdit = async (id) => {
    await updateTask(id, { title: editText });
    setEditingId(null);
  };

  const toggleCompleted = async (task) => {
    await updateTask(task._id, { completed: !task.completed });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="task-container">
      <h2>📝 Your Tasks</h2>

      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          value={newTask}
          placeholder="Enter new task..."
          onChange={(e) => setNewTask(e.target.value)}
          required
        />
        <button type="submit">➕ Add Task</button>
      </form>

      <div className="task-list">
        {tasks.map((task) => (
          <div key={task._id} className="task-box">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(task)}
              title="Mark as completed"
            />

            {editingId === task._id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  placeholder="Edit task"
                />
                <button onClick={() => saveEdit(task._id)}>💾 Save</button>
              </>
            ) : (
              <>
                <span
                  className={`task-title ${task.completed ? 'completed' : ''}`}
                >
                  {task.completed ? '✅' : '🕐'} {task.title}
                </span>
                <button onClick={() => handleEdit(task)}>✏️ Edit</button>
              </>
            )}

            <button onClick={() => deleteTask(task._id)}>🗑️ Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;

