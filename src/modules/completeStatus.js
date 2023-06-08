import renderTaskList from './renderFunctions.js';
import { tasks, updateTaskIndexes, saveTasks } from './taskFunctions.js';

const deleteTask = (index) => {
  tasks.splice(index, 1);
  updateTaskIndexes();
  saveTasks();
  renderTaskList();
};

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
