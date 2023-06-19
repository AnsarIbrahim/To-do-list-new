import { tasks } from '../src/modules/taskFunctions.js';

export default function updateClearAllButton(clearAllBtn) {
  const completedTasks = tasks.some((task) => task.completed);
  clearAllBtn.disabled = !completedTasks;
}
