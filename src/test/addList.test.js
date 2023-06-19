import addTask from '../modules/addTask.js';
import renderTaskList from '../modules/renderFunctions.js';
import { tasks } from '../modules/taskFunctions.js';

jest.mock('../modules/renderFunctions.js');

describe('addTask', () => {
  beforeEach(() => {
    tasks.length = 0;
    renderTaskList.mockClear();
  });

  test('should add a task to the task list', () => {
    addTask('Task 1');
    expect(tasks.length).toBe(1);
    expect(tasks[0].description).toBe('Task 1');
    expect(renderTaskList).toHaveBeenCalledTimes(1);
  });
});
