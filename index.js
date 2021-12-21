
let myLeads = [];


const input = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const inputBtn = document.getElementById("input-btn");
const reset = document.getElementById("reset");
const savetab = document.getElementById("savetab");
const body = document.getElementById("body");

if(localStorage.getItem("myLeads")!=null){
    display();
}

reset.addEventListener("dblclick", function(){

    localStorage.clear();
    myLeads = [];
    ulEl.innerHTML = null;
    
});

inputBtn.addEventListener("click", function (){
    if(input.value != ""){
        myLeads.push(input.value);
        input.value = "";
        myLeads = JSON.stringify(myLeads);
        localStorage.setItem("myLeads", myLeads);
        display();
    }
});

savetab.addEventListener("dblclick", function(){
    // const para = document.createElement("li");
    // para.innerHTML = tabs[0].url;
    // ulEl.append(para);
    // chrome.tabs.query({active: true, currentWindow : true}, function(tabs){
    //     let activeTab = tabs[0];
    //     let activeTabId = activeTab.id;
    // });
    chrome.tabs.query({active : true, currentWindow : true}, function(tabs){
        myLeads.push(tabs[0].url);
        myLeads = JSON.stringify(myLeads);
        localStorage.setItem("myLeads", myLeads);
        display();
    });
});



function display(){
    let listItems = "";
    myLeads = localStorage.getItem("myLeads");
    myLeads = JSON.parse(myLeads);
    for(let i = 0; i < myLeads.length; i++){
        listItems += `<li>
                        <a href='${myLeads[i]}' target='_blank'>
                        ${myLeads[i]}
                        </a>
                    </li>`;
    }
    ulEl.innerHTML = listItems;

}















