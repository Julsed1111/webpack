const data = require("./data.js");

function createTableUser(key) {
  return `<tr class="usersRow"> 
                      <td value = "id">${key.id}</td>
                      <td value = "name">${key.name}</td>
                      <td value = "age">${key.age}</td>
                      <td value = "email">${key.email}</td>
                      <td value = "country">${key.country}</td>
                      <td value = "company">${key.company}</td>
                      <td value = "birthday">${key.birthday}</td>
                  </tr>`;
}

let html = "";
const container = document.querySelector(".usersContent");

for (let key of data.usersData) {
  html += createTableUser(key);
}

container.innerHTML = html;
