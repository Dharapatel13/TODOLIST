//selector
const elTodoList = document.getElementById("myList");
const elDrpDwn = document.getElementById("selected-task");
const elInput = document.getElementById("inpt");
const onRstBtnClick = document.getElementById("onRstBtnClick");
const onAddBtnClick = document.getElementById("onAddBtnClick");
const onKeyPressEvnt = document.getElementById("inpt");

let list = [];

//loding page
window.onload = () => {

    if (JSON.parse(localStorage.getItem("todos")) != null)
        list = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < list.length; i++) {
        const elLi = document.createElement("li");
        elLi.classList.add("Todos__item")
        const elSpan = document.createElement("span");
        elSpan.classList.add("Todos__item-name")
        const elEditBtn = document.createElement('button');
        elEditBtn.innerHTML = '<i class="fa fa-edit"></i>';
        elEditBtn.classList.add('Todos__item-edit');
        const elDtlBtn = document.createElement('button');
        elDtlBtn.innerHTML = '<i class="fa fa-trash"></i>'
        elDtlBtn.classList.add('Todos__item-delete')
        const elCheckBtn = document.createElement("button");
        elCheckBtn.innerHTML = '<i class="fa fa-check"></i>'
        elCheckBtn.classList.add('Todos__item-check');
        elLi.appendChild(elSpan);
        elLi.appendChild(elCheckBtn);
        elLi.appendChild(elDtlBtn);
        elLi.appendChild(elEditBtn);
        elSpan.innerHTML = list[i];
        elInput.innerHTML = "";
        elTodoList.appendChild(elLi);
    }

};

//OnAddButton Click
onAddBtnClick.onclick = () => {
    location.reload()
    let elInput = document.getElementById("inpt").value;

    if (elInput == null || elInput == 0 || elInput === "") {
        alert("You must be write somting");
    }
    document.getElementById("myList").innerHTML = "";
    list.push(elInput);
    localStorage.setItem("todos", JSON.stringify(todos));

}

//onKey Press
onKeyPressEvnt.onkeypress = (event) => {
    let x = event.which || event.keyCode;
    if (x == 13) {
        location.reload();
        let elInput = document.getElementById("inpt").value;

        if (elInput == null || elInput == 0 || elInput === "") {
            alert("You must be write somting");
        }
        document.getElementById("myList").innerHTML = "";
        list.push(elInput);
        localStorage.setItem("todos", JSON.stringify(list));
    }
}

//clear local Storage Data
onRstBtnClick.onclick = () => {
    location.reload();
    elTodoList.innerHTML = "";
    localStorage.clear();

}


//li button Click
elTodoList.addEventListener('click', (event) => {

    if (event.target.tagName === 'BUTTON') {
        const trgBtn = event.target;
        const jLi = trgBtn.parentNode;
        const jSpan = jLi.firstElementChild.textContent;

        if (trgBtn.classList[0] === "Todos__item-delete") {
            location.reload();
            let list;
            if (localStorage.getItem("todos") == null) {
                list = [];
            } else {
                list = JSON.parse(localStorage.getItem('todos'));
            }
            const todoindex = jSpan;
            if (confirm("Are u Sure?")) {
                list.splice(list.indexOf(todoindex), 1);
            }

            localStorage.setItem("todos", JSON.stringify(list))
        } else if (trgBtn.classList[0] === "Todos__item-edit") {
            const jsSpan = jLi.firstElementChild;
            const input = document.createElement('input');
            input.classList.add("Todos__item-editbox")
            input.type = 'text';
            jLi.removeChild(trgBtn);
            input.value = jLi.firstElementChild.textContent;
            jLi.insertBefore(input, jsSpan);
            const btn = document.createElement("button");
            btn.classList.add("Todos__item-done")
            btn.textContent = "DONE";
            jLi.appendChild(btn);


        } else if (trgBtn.textContent === "DONE") {
            location.reload();
            const input = jLi.firstElementChild;
            console.log(jLi.childNodes[1].tagName)
            let jsInput = input.value;
            let todos;
            if (localStorage.getItem("todos") == null) {
                todos = [];
            } else {
                todos = JSON.parse(localStorage.getItem('todos'));
            }
            for (let i = 0; i < todos.length; i++) {
                const todoindex = jLi.childNodes[1].textContent;
                if (todos[i] === todoindex) {
                    // const todoindex = jLi.childNodes[1].textContent;
                    todos.splice(todos.indexOf(todoindex), 1, jsInput);

                }
                localStorage.setItem("todos", JSON.stringify(todos))
            }

        } else if (trgBtn.classList.contains("Todos__item-check")) {

            const li = trgBtn.parentNode;
            li.classList.toggle("Todos__item_cmpted")

        }

    }
    event.preventDefault();
});


//Display Cmplted & Uncmplted
elDrpDwn.addEventListener("change", (e) => {
    const todos = elTodoList.childNodes;
    for (let i = 1; i < todos.length; i++) {
        switch (e.target.value) {
            case "all":
                todos[i].style.display = "flex";
                break;
            case "completed":
                if (todos[i].classList.contains('Todos__item_cmpted')) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todos[i].classList.contains('Todos__item_cmpted')) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
        }
    }
});