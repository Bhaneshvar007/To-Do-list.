let inputEl = document.querySelector("#Search");
let searchBtn = document.querySelector(".searchBtn");
let ToDoBody = document.querySelector(".ToDoBody");

searchBtn.addEventListener("click", () => {
    ToDoFunction();
});

function ToDoFunction() {
    if (inputEl.value === "") {
        alert("Please Enter something . . . ");
    }

    else {
        let inputValue = inputEl.value;

        let text = document.createElement("ul");
        text.classList.add("Child");
        text.innerHTML = `<p class="text">${inputValue}</p>
            <img class="EditBtn" src="./img/editBtn.png" alt="" height="25px">
            <img class="DeleteBtn" src="./img/delete.png" alt="" height="25px">`;
        inputEl.value = "";
        ToDoBody.appendChild(text);

        let DeleteBtn = text.querySelector(".DeleteBtn");
        let editText = text.querySelector(".text");
        let EditBtn = text.querySelector(".EditBtn");


        DeleteBtn.addEventListener("click", () => {
            text.remove();
        });

        EditBtn.addEventListener("click", () => {
            let editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = editText.textContent;

            text.replaceChild(editInput, editText);
            editInput.focus();
            editInput.addEventListener("blur", () => {
                editText.textContent = editInput.value;
                text.replaceChild(editText, editInput);
            });
        });
    }
}
