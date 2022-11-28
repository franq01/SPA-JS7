const mainContent = document.querySelector ("#Container");
const navbar = document.querySelector(".navbar");
const loadData = e => {
    e.preventDefault();
    if(e.target.classList.contains("") || e.target.classList.contains("")){}
}
window.addEventListener("DOMContentLoaded", () => {
fetch  ("../pages/home.html")
.then(page => {
    return page.text; console.log(page);
})
.then(contentHtml => {
    const div = document.createElement("div");
    console.log(contentHtml);
    div.innerHTML = contentHtml;
    mainContent.appendChild (div);
})
navbar.addEventListener("click", loadData);
})