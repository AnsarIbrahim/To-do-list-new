import './styles.css';
import { loadTasks } from './modules/taskFunctions.js';
import renderTaskList from './modules/renderFunctions.js';
import addTask from './modules/addTask.js';
import clearAllCompleted from './modules/completeStatus.js';

const taskForm = document.getElementById('task-form');
const clearAllBtn = document.getElementById('clear-all-btn');

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputTask = document.getElementById('new_task');
  const description = inputTask.value.trim();

  if (description !== '') {
    addTask(description);
    inputTask.value = '';
  }
});

loadTasks();
renderTaskList();

clearAllBtn.addEventListener('click', clearAllCompleted);
