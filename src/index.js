import './styles.css';

const tasks = [
  {
    description: 'wash the Dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'complete To Do list project',
    completed: false,
    index: 2,
  },
];

const taskList = () => {
  const listTask = document.getElementById('task-list');
  const clearBtn = document.querySelector('.clear_btn');
  listTask.innerHTML = '';
  clearBtn.disabled = true;

  tasks.forEach(({ index, description, completed }) => {
    const listItemHTML = `
        <li id="${index}" class="${completed ? 'completed' : ''}">
          <input type="checkbox" class="input_todo" ${
  completed ? 'checked' : ''
} />
          <span class="text_input">${description}</span>
          <span class="dots_btn"><i class="fa-solid fa-ellipsis-vertical dots"></i></span>
        </li>
      `;

    listTask.insertAdjacentHTML('beforeend', listItemHTML);
  });

  const updateClearButtonStatus = () => {
    const clearBtn = document.querySelector('.clear_btn');
    const checkboxes = document.querySelectorAll('.input_todo');
    const allChecked = [...checkboxes].every((checkbox) => checkbox.checked);
    clearBtn.disabled = !allChecked;
  };

  const handleCheckboxClick = () => {
    updateClearButtonStatus();
  };

  const checkboxes = document.querySelectorAll('.input_todo');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', handleCheckboxClick);
  });

  updateClearButtonStatus();
};

taskList();
