let add_btn = document.querySelector("#add-btn");
let form = document.querySelector("form");
let list = document.querySelector("ol");
let remove_btn = document.querySelector("#remove-btn");
let delete_btn = document.querySelector("#delete-btn");
let remove_list = [];

function add() {
    let new_item = document.createElement("li");
    new_item.classList.add("list-item");
    new_item.innerText = form.text.value;
    console.log(new_item.innerText);
    list.append(new_item);
}

function remove() {
    remove_btn.style.display = "none";
    delete_btn.style.display = "flex";
    let items = list.children;

    function clickHandler() {
        this.style.backgroundColor = "green";
        this.isClicked = true;
        remove_list.push(this);
    }

    function mouseoverHandler() {
        if (!this.isClicked) {
            this.style.backgroundColor = "blue";
        }
    }

    function mouseoutHandler() {
        if (!this.isClicked) {
            this.style.backgroundColor = "white";
        }
    }

    Array.from(items).forEach((element) => {
        element.addEventListener("click", clickHandler);
        element.addEventListener("mouseover", mouseoverHandler);
        element.addEventListener("mouseout", mouseoutHandler);
    });
}

function delet() {
    console.log(remove_list);
    remove_btn.style.display = "flex";
    delete_btn.style.display = "none";
    remove_list.forEach((element) => {
        element.removeEventListener("click", clickHandler);
        element.removeEventListener("mouseover", mouseoverHandler);
        element.removeEventListener("mouseout", mouseoutHandler);
        element.remove();
    });

    // Clear the remove_list
    remove_list = [];
}

add_btn.addEventListener("click", add);
remove_btn.addEventListener("click", remove);
delete_btn.addEventListener("click", delet);
