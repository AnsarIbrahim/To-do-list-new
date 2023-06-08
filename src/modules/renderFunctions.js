import {
  tasks,
  saveTasks,
  updateTaskIndexes,
  updateTaskDescription,
} from './taskFunctions.js';

const taskList = document.getElementById('task-list');
const clearAllBtn = document.getElementById('clear-all-btn');

const updateClearAllButton = () => {
  const completedTasks = tasks.some((task) => task.completed);
  clearAllBtn.disabled = !completedTasks;
};

const makeTaskEditable = (index, descriptionSpan) => {
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'input_todo_edit';
  input.value = descriptionSpan.textContent;

  const updateDescription = () => {
    const newDescription = input.value.trim();
    if (newDescription !== '') {
      updateTaskDescription(index, newDescription);
      // eslint-disable-next-line no-use-before-define
      renderTaskList();
    }
  };

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      updateDescription();
    }
  });

  input.addEventListener('blur', () => {
    updateDescription();
  });

  descriptionSpan.replaceWith(input);
  input.focus();
};

// Function to render the task list
const renderTaskList = () => {
  taskList.innerHTML = '';

  function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskIndexes();
    saveTasks();
    renderTaskList();
  }

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
  const clearAllCompleted = () => {
    const completedTasks = tasks.filter((task) => task.completed);
    completedTasks.forEach((task) => {
      const taskIndex = tasks.findIndex((t) => t.index === task.index);
      if (taskIndex !== -1) {
        deleteTask(taskIndex);
      }
    });

    renderTaskList();
  };

  clearAllBtn.addEventListener('click', () => clearAllCompleted());

  updateClearAllButton();
};
// Function to add a new task
const addTask = (description) => {
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };

  tasks.push(newTask);
  saveTasks();
  renderTaskList();
};

export { addTask, renderTaskList };
