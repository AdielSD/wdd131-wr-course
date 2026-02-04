document.addEventListener('DOMContentLoaded', function () {

  const input = document.querySelector('#favchap');
  const button = document.querySelector('button');
  const list = document.querySelector('#list');

  button.addEventListener('click', function () {

    // Only add if input is not empty
    if (input.value.trim() !== '') {

      // Create elements
      const li = document.createElement('li');
      const deleteButton = document.createElement('button');

      // Set content
      li.textContent = input.value;
      deleteButton.textContent = '❌';

      // Build structure
      li.append(deleteButton);
      list.append(li);

      // Delete button functionality
      deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
      });

      // Clear input and refocus
      input.value = '';
      input.focus();
    }
  });
});

