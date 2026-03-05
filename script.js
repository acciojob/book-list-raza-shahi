//your JS code here. If required.
function handleSubmit(e) {
  e.preventDefault();

  let titleInput = document.getElementById("title");
  let authorInput = document.getElementById("author");
  let isbnInput = document.getElementById("isbn");

  let title = titleInput.value.trim();
  let author = authorInput.value.trim();
  let isbn = isbnInput.value.trim();

  if (title === "" || author === "" || isbn === "") {
    alert("Please fill in all fields");
    return;
  }

  let tbody = document.getElementById("book-list");
  let newRow = document.createElement("tr");

  newRow.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Delete</button></td>
    `;
  tbody.appendChild(newRow);
  titleInput.value = "";
  authorInput.value = "";
  isbnInput.value = "";
}
let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", handleSubmit);

document.getElementById("book-list").addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    let row = e.target.closest("tr");
    row.remove();
  }

  if (e.target.classList.contains("delete")) {
    let row = e.target.closest("tr");
    row.remove();
  }
});