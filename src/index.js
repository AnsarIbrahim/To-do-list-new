import './styles.css';
import { loadTasks } from './modules/taskFunctions.js';
import { renderTaskList, addTask } from './modules/renderFunctions.js';

const taskForm = document.getElementById('task-form');

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
