import { tasks, saveTasks, updateTaskIndexes } from './taskFunctions.js';
import makeTaskEditable from './editTask.js';
import updateClearAllButton from './clearAll.js';

const taskList = document.getElementById('task-list');

export default function renderTaskList() {
  taskList.innerHTML = '';

  const deleteTask = (index) => {
    tasks.splice(index, 1);
    updateTaskIndexes();
    saveTasks();
    renderTaskList();
  };

  tasks.forEach(({ index, description, completed }) => {
    const listItem = document.createElement('li');
    listItem.id = index;
    listItem.className = completed ? 'completed' : '';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'input_todo';
    checkbox.checked = completed;

    const toggleTaskCompleted = (index) => {
      if (tasks[index]) {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTaskList();
      }
    };

    checkbox.addEventListener('click', () => {
      const taskIndex = index - 1;
      toggleTaskCompleted(taskIndex);
    });

    const descriptionSpan = document.createElement('span');
    descriptionSpan.className = 'text_input';
    descriptionSpan.textContent = description;

    descriptionSpan.addEventListener('click', () => {
      makeTaskEditable(index - 1, descriptionSpan);
    });

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete_btn';
    deleteButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    deleteButton.addEventListener('click', (event) => {
      const listItem = event.target.parentNode;
      const isSelected = listItem.classList.contains('selected');
      const task = tasks.find((task) => task.index === index);

      if (isSelected || (task && task.completed)) {
        const taskIndex = tasks.findIndex((task) => task.index === index);
        if (taskIndex !== -1) {
          deleteTask(taskIndex);
        }
      }
    });

    if (completed) {
      descriptionSpan.classList.add('completed-text');
    }

    listItem.appendChild(checkbox);
    listItem.appendChild(descriptionSpan);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
  });

  updateClearAllButton();
}
