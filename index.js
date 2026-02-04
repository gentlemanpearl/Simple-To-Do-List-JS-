// Simple To-Do List Console Application

let tasks = [];

/**
 * Adds a new task to the to-do list
 * @param {string} task - The task description to add
 */
function addTask(task) {
  if (task.trim() === "") {
    console.log("❌ Task cannot be empty!");
    return;
  }
  tasks.push(task);
  console.log(`✅ Task added: "${task}"`);
}

/**
 * Displays all tasks in the to-do list with numbering
 */
function showTasks() {
  if (tasks.length === 0) {
    console.log("📋 No tasks in your to-do list!");
    return;
  }
  console.log("\n📋 To-Do List:");
  console.log("---------------");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
  console.log("---------------\n");
}

/**
 * Deletes a task at the specified index
 * @param {number} index - The position of the task to delete (1-based index)
 */
function deleteTask(index) {
  // Convert from 1-based to 0-based index
  const actualIndex = index - 1;
  
  if (actualIndex < 0 || actualIndex >= tasks.length) {
    console.log(`❌ Invalid task number! Please enter a number between 1 and ${tasks.length}`);
    return;
  }
  
  const deletedTask = tasks.splice(actualIndex, 1)[0];
  console.log(`🗑️  Deleted: "${deletedTask}"`);
}

// Example Usage:
console.log("🚀 Starting To-Do List Application\n");

addTask("Learn JavaScript");
addTask("Practice CSS");
showTasks();

deleteTask(1);
showTasks();

// Additional examples:
addTask("Build a project");
addTask("Review concepts");
showTasks();

deleteTask(2);
showTasks();
