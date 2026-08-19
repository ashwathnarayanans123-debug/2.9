import { useState } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import FilterBar from './components/FilterBar';

/**
 * App — root component that owns all state:
 *   tasks  : array of { id, title, completed }
 *   filter : 'All' | 'Active' | 'Completed'
 */
function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  // --- Handlers ---

  function addTask(title) {
    const newTask = {
      id: Date.now(),       // simple unique id
      title,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // --- Derived state ---

  const visibleTasks = tasks.filter((task) => {
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true; // 'All'
  });

  // --- Empty state message ---

  function emptyMessage() {
    if (tasks.length === 0) return 'No tasks yet. Add one above!';
    if (filter === 'Active') return 'No active tasks. Great job!';
    if (filter === 'Completed') return 'No completed tasks yet.';
    return 'Nothing to show.';
  }

  // --- Render ---

  return (
    <main className="app">
      <h1>Task Manager</h1>

      <TaskInput onAdd={addTask} />

      <FilterBar current={filter} onChange={setFilter} />

      {visibleTasks.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📋</div>
          <p>{emptyMessage()}</p>
        </div>
      ) : (
        <ul className="task-list">
          {visibleTasks.map((task) => (
            <TaskItem key={task.id} task={task} onToggle={toggleTask} />
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;
