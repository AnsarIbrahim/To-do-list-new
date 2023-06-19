import renderTaskList from './renderFunctions.js';
import { tasks } from './taskFunctions.js';
import deleteTask from './deleteTask.js';

export default function clearAllCompleted() {
  const completedTasks = tasks.filter((task) => task.completed);
  completedTasks.forEach((task) => {
    const taskIndex = tasks.findIndex((t) => t.index === task.index);
    if (taskIndex !== -1) {
      deleteTask(taskIndex);
    }
  });

  renderTaskList();
}
