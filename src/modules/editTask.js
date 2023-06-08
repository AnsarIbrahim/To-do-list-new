import { updateTaskDescription } from './taskFunctions.js';

export default function makeTaskEditable(index, descriptionSpan) {
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'input_todo_edit';
  input.value = descriptionSpan.textContent;

  const updateDescription = () => {
    const newDescription = input.value.trim();
    if (newDescription !== '') {
      updateTaskDescription(index, newDescription);
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
}
