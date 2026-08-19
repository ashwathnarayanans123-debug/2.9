import { useState } from 'react';

/**
 * TaskInput — controlled input that calls onAdd(title) when the user
 * submits via the button or the Enter key. Empty titles are ignored.
 */
function TaskInput({ onAdd }) {
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;   // do not add empty tasks
    onAdd(trimmed);
    setValue('');
  }

  return (
    <form className="task-input-form" onSubmit={handleSubmit}>
      <input
        id="task-input"
        type="text"
        placeholder="Enter a task title…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-label="New task title"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskInput;
