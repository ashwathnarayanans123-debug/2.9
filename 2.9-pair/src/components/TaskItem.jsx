/**
 * TaskItem — renders a single task with a checkbox.
 * Calls onToggle(id) when the checkbox is clicked.
 */
function TaskItem({ task, onToggle }) {
  return (
    <li className={`task-item${task.completed ? ' completed' : ''}`}>
      <input
        id={`task-${task.id}`}
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        aria-label={`Mark "${task.title}" as ${task.completed ? 'active' : 'complete'}`}
      />
      <span>{task.title}</span>
    </li>
  );
}

export default TaskItem;
