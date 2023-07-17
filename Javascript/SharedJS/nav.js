var currentPage = "";
var navList;


window.addEventListener("load", function () {
    // Code to be executed when the page has finished loading
    console.log("Page loaded!");
    currentPage = window.location.pathname;
    displayCorrectNavLinks(currentPage);
});


const displayCorrectNavLinks = (page) => {
    var navList = document.getElementById("navList");
    var list = "";
    switch (page) {
        case "/index.html":
            list +=
                `<li id="contactList">
                    <a class="fs-5" href="contact.html" aria-label="Contact Link">Contact</a>
                </li>
                <li id="aboutList">
                    <a class="fs-5" href="about.html" aria-label="About Link">About Me</a>
                </li>`;
            break;
        case "/about.html":
            list +=
                `<li id="homeList">
                    <a class="fs-5" href="index.html" aria-label="Home Link">Home</a>
                </li>
                <li id="contactList">
                    <a class="fs-5" href="contact.html" aria-label="Contact Link">Contact</a>
                </li>`;
            break;
        case "/contact.html":
            list +=
                `<li id="homeList">
                <a class="fs-5" href="index.html" aria-label="Home Link">Home</a>
                </li>
                <li id="aboutList">
                    <a class="fs-5" href="about.html" aria-label="About Link">About Me</a>
                </li>`;
            break;
        default:
            return;
    }
    return navList.innerHTML = list;
}