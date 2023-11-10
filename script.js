let add_btn = document.querySelector("#add-btn");
let form = document.querySelector("form");
let list = document.querySelector("ol");
let remove_btn = document.querySelector("#remove-btn");
let delete_btn = document.querySelector("#delete-btn");
let remove_list = [];
function item_mouseout() {

    if (!this.is_clicked) {
        this.style.backgroundColor = "white";
    }

}
function item_mouseover() {
    if (!this.is_clicked) {
        this.style.backgroundColor = "blue";
    }
}
function item_click() {
    this.style.backgroundColor = "green";
    this.is_clicked = true;
    remove_list.push(this);
}
function add() {
    if(form.text.value){
    let new_item = document.createElement("li");
    new_item.classList.add("list-item");
    new_item.innerText = form.text.value;
    console.log(new_item.innerText);
    list.append(new_item);
    }
}
function remove() {
    remove_btn.style.display = "none";
    delete_btn.style.display = "flex";
    let items = list.children;

    Array.from(items).forEach((element) => {
        let is_clicked = false;
        element.addEventListener("click", item_click);
        element.addEventListener("mouseover", item_mouseover);
        element.addEventListener("mouseout", item_mouseout);
    });
}
function delet() {
    console.log(remove_list);
    remove_btn.style.display = "flex";
    delete_btn.style.display = "none";
    remove_list.forEach((element) => {
        element.remove();
    })
    let items = list.children;
    Array.from(items).forEach((element) => {
        element.removeEventListener("mouseout", item_mouseout);
        element.removeEventListener("click", item_click);
        element.removeEventListener("mouseover", item_mouseover);
    })
}
add_btn.addEventListener("click", add);
remove_btn.addEventListener("click", remove);
delete_btn.addEventListener("click", delet);