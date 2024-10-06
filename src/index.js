document.addEventListener("DOMContentLoaded", () => {
  const inptForm = document.getElementById("create-task-form");

  inptForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevents the default form submission behavior.

      const formData = new FormData(inptForm);
      const userTask = formData.get('newTaskDescription');
      const userPriority = formData.get('priority');
      const taskLists = document.getElementById('tasks');

      // if the task description is empty.
      if (!userTask) {
          alert('Please enter a Task Description');
          return; // Early return to avoid further processing
      }

      // Create list item
      const li = document.createElement('li');
      li.innerText = userTask.toUpperCase();

      // Create clear button
      const clearBtn = document.createElement('button');
      clearBtn.innerText = 'x';
      clearBtn.addEventListener("click", () => {
          taskLists.removeChild(li); // Removes the task from the list
      });

      // Set the color based on user priority
      const priorityColors = {
          High: "red",
          Medium: "yellow",
          Low: "green"
      };
      li.style.color = priorityColors[userPriority] || "black"; // Default color

      li.appendChild(clearBtn); // Add clear button to list item
      taskLists.appendChild(li); // Add list item to task list

      // Clear the input field after adding the task
      inptForm.reset(); // This resets the form inputs, including 'newTaskDescription'
  });
});