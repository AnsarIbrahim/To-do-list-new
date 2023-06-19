import deleteTask from '../modules/deleteTask.js';
import {
  tasks,
  updateTaskIndexes,
  saveTasks,
} from '../modules/taskFunctions.js';
import renderTaskList from '../modules/renderFunctions.js';

jest.mock('../modules/taskFunctions', () => {
  const originalModule = jest.requireActual('../modules/taskFunctions');
  return {
    ...originalModule,
    updateTaskIndexes: jest.fn(),
    saveTasks: jest.fn(),
  };
});

jest.mock('../modules/renderFunctions.js');

describe('deleteTask', () => {
  let originalTasks;

  beforeEach(() => {
    originalTasks = [
      { id: 1, name: 'Task 1' },
      { id: 2, name: 'Task 2' },
      { id: 3, name: 'Task 3' },
    ];

    tasks.splice(0, tasks.length);
    tasks.push(...originalTasks);
    updateTaskIndexes.mockClear();
    saveTasks.mockClear();
    renderTaskList.mockClear();
  });

  it('should delete a task from the tasks array', () => {
    const indexToDelete = 1;
    deleteTask(indexToDelete);

    expect(tasks.length).toBe(originalTasks.length - 1);
    expect(tasks).toEqual([
      { id: 1, name: 'Task 1' },
      { id: 3, name: 'Task 3' },
    ]);
  });

  it('should update task indexes', () => {
    const indexToDelete = 0;
    deleteTask(indexToDelete);

    expect(updateTaskIndexes).toHaveBeenCalledTimes(1);
  });

  it('should save tasks', () => {
    const indexToDelete = 2;

    deleteTask(indexToDelete);

    expect(saveTasks).toHaveBeenCalledTimes(1);
  });

  it('should render the task list', () => {
    const indexToDelete = 1;

    deleteTask(indexToDelete);

    expect(renderTaskList).toHaveBeenCalledTimes(1);
  });
});
