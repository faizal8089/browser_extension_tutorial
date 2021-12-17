
let myLeads = [];

const input = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const inputBtn = document.getElementById("input-btn");
const dis = document.getElementById("dis");

inputBtn.addEventListener("click", function (){
    myLeads.push(input.value);
    display();
    input.value = "";
});



function display(){
    let listItems = "";
    for(let i = 0; i < myLeads.length; i++){
        listItems += "<li><a href='#' target='_blank'>" + myLeads[i] + "</a></li>";
    }
    ulEl.innerHTML = listItems;
}















