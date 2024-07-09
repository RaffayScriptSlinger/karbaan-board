document.addEventListener("DOMContentLoaded", function() {
    const dropzones = document.getElementsByClassName("dropzone");

    Array.from(dropzones).forEach(dropzone => {
        dropzone.addEventListener("dragover", dragOver);
        dropzone.addEventListener("drop", drop);
    });
});

function addTask(inputId, listId) {
    const input = document.getElementById(inputId);
    const inputValue = input.value.trim();

    if (inputValue) {
        const listItem = createTaskItem(inputValue);
        document.getElementById(listId).appendChild(listItem);
        input.value = "";
    }
}

function createTaskItem(content) {
    const listItem = document.createElement("li");
    listItem.textContent = content;
    listItem.draggable = true;
    listItem.id = `item-${Date.now()}`;
    listItem.addEventListener("dragstart", dragStart);
    listItem.addEventListener("dblclick", editTask);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-button";
    removeButton.onclick = () => listItem.remove();

    listItem.appendChild(removeButton);
    return listItem;
}

function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    event.dataTransfer.effectAllowed = "move";
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(id);
    const dropzone = event.target.closest(".dropzone");
    dropzone.querySelector("ul").appendChild(draggedElement);
}

function editTask(event) {
    const listItem = event.target.closest("li");
    const currentText = listItem.firstChild.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentText;
    input.classList.add("edit-mode");

    listItem.textContent = "";
    listItem.appendChild(input);
    input.focus();

    input.addEventListener("blur", () => {
        listItem.textContent = input.value;
        listItem.appendChild(listItem.querySelector(".remove-button"));
        listItem.addEventListener("dblclick", editTask);
    });
}
