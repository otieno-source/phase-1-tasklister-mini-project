# Challenge: TaskLister Mini-Project

## myOriginal js-code using document.getElementById(''). original id for taskinput = "new-task-description"

document.addEventListener("DOMContentLoaded", () => {
function showTask(event) {
event.preventDefault();

    const taskInput = document.getElementById("new-task-description");
    const taskList = document.getElementById("tasks");
    const priorityInput = document.getElementById("priority");

    if (taskInput.value.trim() === "") {
      alert("Task description missing");
      return;
    }

    const li = document.createElement("li");
    li.textContent = taskInput.value.toUpperCase();

    // set colors for user priorities
    const priorityColors = {
      High: "red",
      Medium: "yellow",
      Low: "green"
    };

    li.style.color = priorityColors[priorityInput.value] || "black"; // Default to black for unrecognized priority

    // Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";

    // Add event listener for delete button
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    // Append button to li and then to ul
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";

}

const submitButton = document.getElementById("submitBtn");
submitButton.addEventListener("click", showTask);
});

## its original html code with the original variable.

<!-- <!DOCTYPE HTML>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Flatiron Task Lister</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="main-content">
    <h1>Task Lister Lite™️</h1>

    <form id="create-task-form" action="#" method="POST">
      <label for="new-task-description">Task description:</label>
      <input type="text" id="new-task-description" name="new-task-description" placeholder="description">
      <label for="priority">Select Priority</label>
      <select name="priority" id="priority">
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input type="submit" id="submitBtn" value="Create New Task">
    </form>

    <div id="list">
      <h2>My Todos:</h2>
      <ul id="tasks">
      </ul>
    </div>

    <!-- <script src="./src/index.js"></script> -->
  </div>
  <!-- <script src="./src/index.js"></script> -->
  <script src="./rough.js"></script
</body>
</html> -->

## cloned html

<!DOCTYPE HTML>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Flatiron Task Lister</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="main-content">
    <h1>Task Lister Lite™️</h1>

    <form id="create-task-form" action="" method="POST">
      <label for="new-task-description">Task description:</label>
      <input type="text" id="new-task-description" name="new-task-description" placeholder="description">
      <input type="submit" value="Create New Task">
    </form>

    <div id="list">
      <h2>My Todos:</h2>
      <ul id="tasks">
      </ul>
    </div>

    <script src="./src/index.js"></script>

  </div>

</body>
</html>

## copy of the original css

html {
height: 100%;
width: 100%;
font-family: "Titillium Web", sans-serif;
}

body {
min-height: 100%;
min-width: 100%;
background: linear-gradient(pink, violet);
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

button {
font-size: 7px;
}

#priority{
width: 100px;
}

#main-content {
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border: 1px solid #333;
background: rgba(255, 255, 255, 0.3);
padding: 15px 20px 18px 18px;
border-radius: 5px;
box-shadow: 2px 5px 5px #333;
}

#list {
margin: 10px;
border: 1px solid #333;
background: rgba(255, 255, 255, 0.75);
padding: 15px 20px 18px 18px;
border-radius: 5px;
box-shadow: 2px 5px 5px #333;
}

/_ #tasks{
display: grid;
grid-row: auto;
border-style: dotted;
} _/
