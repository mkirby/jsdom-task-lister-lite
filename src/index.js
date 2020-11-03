document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.querySelector("#create-task-form")
  const taskListLi = document.querySelector("#tasks")

  newTaskForm.addEventListener("submit", renderNewTask)
  taskListLi.addEventListener("click", event => {
    if (event.target.matches("li")) {
      clearTask(event)
    }
  })

  function clearTask(event) {
    const item = event.target.textContent
    if (confirm(`Are you sure you want to clear ${item}?`)) {
      event.target.remove()
    }
  }

  function renderNewTask(event) {
    event.preventDefault()
    const li = document.createElement("li")
    li.textContent = event.target['new-task-description'].value
    taskListLi.append(li)
    newTaskForm.reset()
  }

});
