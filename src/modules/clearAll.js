import { tasks } from './taskFunctions.js';

const clearAllBtn = document.getElementById('clear-all-btn');

export default function updateClearAllButton() {
  const completedTasks = tasks.some((task) => task.completed);
  clearAllBtn.disabled = !completedTasks;
}
