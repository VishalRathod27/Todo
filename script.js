function addEditDeleteListeners() {
    const editBtns = document.querySelectorAll(".editBtn");
    const deleteBtns = document.querySelectorAll(".deleteBtn");

    editBtns.forEach((editBtn) => {
        editBtn.addEventListener("click", () => {
            const taskItem = editBtn.parentElement;
            const taskText = taskItem.firstChild.nodeValue;
            const newText = prompt("Edit task:", taskText);
            if (newText !== null) {
                taskItem.firstChild.nodeValue = newText;
                updateLocalStorage();
            }
        });
    });

    deleteBtns.forEach((deleteBtn) => {
        deleteBtn.addEventListener("click", () => {
            const taskItem = deleteBtn.parentElement;
            taskItem.remove();
            updateLocalStorage();
        });
    });
}

function updateLocalStorage() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            ${taskText}
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = "";

        addEditDeleteListeners();
        updateLocalStorage();
    }
});

        window.addEventListener("load", () => {
            const storedTasks = localStorage.getItem("tasks");
            if (storedTasks) {
                taskList.innerHTML = storedTasks;
                addEditDeleteListeners();
            }
        });