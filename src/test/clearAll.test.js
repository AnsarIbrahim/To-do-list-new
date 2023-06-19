import { tasks } from '../modules/taskFunctions.js';
import updateClearAllButton from '../../__mocks__/clearAll.js';

describe('updateClearAllButton', () => {
  let clearAllBtn;

  beforeEach(() => {
    clearAllBtn = document.createElement('button');
    clearAllBtn.id = 'clear-all-btn';
    document.body.appendChild(clearAllBtn);
  });

  afterEach(() => {
    document.body.removeChild(clearAllBtn);
  });

  it('should disable the clear-all button when there are no completed tasks', () => {
    tasks.length = 0;
    updateClearAllButton(clearAllBtn);
    expect(clearAllBtn.disabled).toBe(true);
  });

  it('should enable the clear-all button when there are completed tasks', () => {
    tasks.length = 0;
    tasks.push({ id: 1, completed: true });
    updateClearAllButton(clearAllBtn);
    expect(clearAllBtn.disabled).toBe(false);
  });
});
