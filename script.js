const currentDay = document.querySelector("#currentDay");
const saveBtn = document.querySelectorAll(".saveBtn");
const container = document.querySelector(".container");
const tables = document.querySelectorAll(".table");
const hour = document.querySelector(".hour");
const task = document.querySelectorAll(".task");
const t = moment();

let now = Number(moment().format("h:mm:ss a"));
console.log(t.hours());

function init() {
    tables.forEach((item, i) => {
        let id = item.id;
        let plans = localStorage.getItem(id);
        console.log(plans);
        if (plans !== null) {
            task[i].value = plans;
            console.log("object");
        }
    });
}

init();
for (let i = 0; i < saveBtn.length; i++) {
    console.log("object");
    saveBtn[i].addEventListener("click", function(e) {
        const id =
            saveBtn[i].previousElementSibling.previousElementSibling.parentElement.id;
        const text = task[i].value;
        console.log(id);
        saveDatatoLocal(id, text);
    });
}

function colors() {
    const hours = t.hours() - 12;
    tables.forEach((item) => {
        const id = Number(item.id);
        console.log("id", id);
        console.log("Hour", hours);
        console.log("1", hours < id);
        console.log("2", hours > id);
        console.log("3", id === hours);
    });
}