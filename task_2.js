let taskInput = document.querySelector(".task-input input");
let addBtn = document.querySelector(".addBtn");
let taskList = document.querySelector(".taskList");

addBtn.addEventListener("click", function () {
    let taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter your task");
        return;
    }

    let li = document.createElement("li");
    li.className = "task-li";
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    li.querySelector("span").addEventListener("click", function () {
        this.style.textDecoration = "line-through";
    });

    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = "";
});

let form = document.querySelector("form");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let phoneInput = document.querySelector("#phone");
let messageInput = document.querySelector("#message")

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let nameText = nameInput.value.trim();
    let numberText = phoneInput.value.trim();
    let emailText = emailInput.value.trim();

    if (nameText === "") {
        alert("Please enter your name");
        nameInput.focus();
        return;
    }

    let phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(numberText)) {
        alert("Please enter a valid 10-digit mobile number");
        phoneInput.focus();
        return;
    }
    let emailragex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailragex.test(emailText)) {
        alert("Please enter a valid email");
        emailInput.focus();
        return;
    }

    alert("Form submitted successfully!");
    form.reset();
});