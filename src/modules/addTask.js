import { tasks, saveTasks } from './taskFunctions.js';
import renderTaskList from './renderFunctions.js';

export default function addTask(description) {
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };

  tasks.push(newTask);
  saveTasks();
  renderTaskList();
}
