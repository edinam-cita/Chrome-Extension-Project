let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    //listItems += "<li><a target='_blank'href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
    listItems += `
    <li>
    <a target="_blank" href="${myLeads[i]}"> 
    ${myLeads[i]} 
    </a>
    </li>
    `;
  }
  ulEl.innerHTML = listItems;
}

/*Alternative way of doing this: listItems += "<li>" + myLeads[i] + "</li>";
     /create element 
     set text content
     append to ul/
     const = document.createElement("li")
     li.textContent = myLeads[i]
     ulEl.append(li)*/
