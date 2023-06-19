import { tasks, updateTaskIndexes, saveTasks } from './taskFunctions.js';
import renderTaskList from './renderFunctions.js';

export default function deleteTask(index) {
  tasks.splice(index, 1);
  updateTaskIndexes();
  saveTasks();
  renderTaskList();
}
