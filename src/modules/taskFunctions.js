// eslint-disable-next-line import/no-mutable-exports
let tasks = [];

const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const loadTasks = () => {
  const savedTasks = localStorage.getItem('tasks');
  tasks = savedTasks ? JSON.parse(savedTasks) : [];
};

const updateTaskIndexes = () => {
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
};

const updateTaskDescription = (index, description) => {
  if (tasks[index]) {
    tasks[index].description = description;
    saveTasks();
  }
};

export {
  tasks,
  saveTasks,
  loadTasks,
  updateTaskIndexes,
  updateTaskDescription,
};

// export function saveTasks() {
//   localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// // Function to load tasks from local storage
// export function loadTasks() {
//   const savedTasks = localStorage.getItem('tasks');
//   tasks = savedTasks ? JSON.parse(savedTasks) : [];
// }

// // Function to update task indexes
// export function updateTaskIndexes() {
//   tasks.forEach((task, index) => {
//     task.index = index + 1;
//   });
// }

// // Function to update task description
// export function updateTaskDescription(index, description) {
//   if (tasks[index]) {
//     tasks[index].description = description;
//     saveTasks();
//   }
// }
