export default function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span>Priority: {task.priority}</span>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task)} />
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
}
