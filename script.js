const currentDay = document.querySelector("#currentDay");
const saveBtn = document.querySelectorAll(".saveBtn");
const container = document.querySelector(".container");
const tables = document.querySelectorAll(".table");
const hour = document.querySelector(".hour");
const task = document.querySelectorAll(".task");
const t = moment();

let now = Number(moment().format("h:mm:ss a"));
console.log(t.hours());