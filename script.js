document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("todo-input");
    const addButton = document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");
    const itemsLeft = document.getElementById("items-left");
    const allBtn = document.getElementById("all");
    const activeBtn = document.getElementById("active");
    const completedBtn = document.getElementById("completed");
    const clearCompletedBtn = document.getElementById("clear-completed");

    let tasks = [];

    function renderTasks(filter = "all") {
        todoList.innerHTML = "";
        let filteredTasks = tasks.filter(task => {
            if (filter === "active") return !task.completed;
            if (filter === "completed") return task.completed;
            return true;
        });

        filteredTasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span class="${task.completed ? "completed" : ""}">${task.text}</span>
                <button class="toggle-btn">✔</button>
                <button class="delete-btn">✖</button>
            `;

            // Attach event listeners to buttons
            li.querySelector(".toggle-btn").addEventListener("click", () => toggleTask(index));
            li.querySelector(".delete-btn").addEventListener("click", () => deleteTask(index));

            todoList.appendChild(li);
        });

        itemsLeft.innerText = `${tasks.filter(task => !task.completed).length} items left`;
    }

    function addTask() {
        if (input.value.trim() !== "") {
            tasks.push({ text: input.value, completed: false });
            input.value = "";
            renderTasks();
        }
    }

    function toggleTask(index) {
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    }

    function clearCompleted() {
        tasks = tasks.filter(task => !task.completed);
        renderTasks();
    }

    addButton.addEventListener("click", addTask);
    input.addEventListener("keypress", e => {
        if (e.key === "Enter") addTask();
    });

    allBtn.addEventListener("click", () => renderTasks("all"));
    activeBtn.addEventListener("click", () => renderTasks("active"));
    completedBtn.addEventListener("click", () => renderTasks("completed"));
    clearCompletedBtn.addEventListener("click", clearCompleted);

    renderTasks();
});
