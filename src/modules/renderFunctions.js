import {
  tasks,
  saveTasks,
  updateTaskIndexes,
  updateTaskDescription,
} from './taskFunctions.js';

const taskList = document.getElementById('task-list');

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
  const deleteTask = (index) => {
    tasks.splice(index, 1);
    updateTaskIndexes();
    saveTasks();
    renderTaskList();
  };
  taskList.innerHTML = '';

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

    deleteButton.addEventListener('click', () => {
      const taskIndex = index - 1;
      deleteTask(taskIndex);
    });

    if (completed) {
      descriptionSpan.classList.add('completed-text');
    }

    listItem.appendChild(checkbox);
    listItem.appendChild(descriptionSpan);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
  });
};

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
