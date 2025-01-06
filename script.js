const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list_container");

function addTask() {
    const taskText = inputBox.value.trim();
    if (taskText === "") {
        alert("You must write something!");
    } else {
        // Create a new list item
        const li = document.createElement("li");
        li.innerText = taskText;

        // Add delete button
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.className = "delete";
        li.appendChild(span);

        listContainer.appendChild(li);
    }
    inputBox.value = ""; // Clear input field
    saveData();
}

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}

showTask();
