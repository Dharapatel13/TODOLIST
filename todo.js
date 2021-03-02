//selector
const elTodoList = document.getElementById("myList");
const elDrpDwn = document.getElementById("selected-task");
const elInput = document.getElementById("inpt");

let list = [];

//loding page
window.onload = () => {

    if (JSON.parse(localStorage.getItem("todos")) != null)
        list = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < list.length; i++) {
        const elLi = document.createElement("li");
        const elSpan = document.createElement("span");
        const elEditBtn = document.createElement('button');
        elEditBtn.innerHTML = '<i class="fa fa-edit"></i>';
        elEditBtn.classList.add('jsEdit');
        const elDtlBtn = document.createElement('button');
        elDtlBtn.innerHTML = '<i class="fa fa-trash"></i>'
        elDtlBtn.classList.add('jsDtl')
        const elCheckBtn = document.createElement("button");
        elCheckBtn.innerHTML = '<i class="fa fa-check"></i>'
        elCheckBtn.classList.add('check');
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
const onAddBtnClick = () => {
    location.reload()
    let elInput = document.getElementById("inpt").value;

    if (elInput == null || elInput == 0 || elInput === "") {
        alert("You must be write somting");
    }
    document.getElementById("myList").innerHTML = "";
    list.push(elInput);
    localStorage.setItem("todos", JSON.stringify(list));

}

//onKey Press
const onKeyPressEvnt = (event) => {
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
const onRstBtnClick = () => {
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

        if (trgBtn.classList[0] === "jsDtl") {
            location.reload();
            let list;
            if (localStorage.getItem("todos") == null) {
                list = [];
            } else {
                list = JSON.parse(localStorage.getItem('todos'));
            }
            const todoindex = jSpan;
            list.splice(list.indexOf(todoindex), 1);
            localStorage.setItem("todos", JSON.stringify(list))
        } else if (trgBtn.classList[0] === "jsEdit") {
            const jsSpan = jLi.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            jLi.removeChild(trgBtn);
            input.value = jLi.firstElementChild.textContent;
            jLi.insertBefore(input, jsSpan);
            const btn = document.createElement("button");
            btn.textContent = "DONE";
            jLi.appendChild(btn);


        } else if (trgBtn.textContent === "DONE") {
            location.reload();
            const input = jLi.firstElementChild;
            console.log(jLi.childNodes[1].tagName)
            let jsInput = input.value;
            let list;
            if (localStorage.getItem("todos") == null) {
                list = [];
            } else {
                list = JSON.parse(localStorage.getItem('todos'));
            }
            for (let i = 0; i < list.length; i++) {
                if (list[i] === jLi.childNodes[1].textContent) {
                    const todoindex = jLi.childNodes[1].textContent;
                    list.splice(list.indexOf(todoindex), 1, jsInput);

                }
                localStorage.setItem("todos", JSON.stringify(list))
            }

        } else if (trgBtn.classList.contains("check")) {

            const li = trgBtn.parentNode;
            li.classList.toggle("cmpted")

        }

    }
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
                if (todos[i].classList.contains('cmpted')) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todos[i].classList.contains('cmpted')) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
        }
    }
});