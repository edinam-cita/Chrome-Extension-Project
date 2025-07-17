
let myLeads = ["Html","Css","Js"];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function(){
     myLeads.push(inputEl.value)
     console.log(myLeads)
});

for (let i = 0; i < myLeads.length; i++){
     ulEl.innerHTML += "<li>" + myLeads[i] + "<li/>";
     /*Alternative way of doing this
     /create element 
     set text content
     append to ul/
     const = document.createElement("li")
     li.textContent = myLeads[i]
     ulEl.append(li)*/


