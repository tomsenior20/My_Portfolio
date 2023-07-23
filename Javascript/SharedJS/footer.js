window.addEventListener("load", function () {
    // Code to be executed when the page has finished loading
    console.log("Page loaded!");
    getOperatingYear();
});

const getOperatingYear = () => {
    const currentYear = new Date().getFullYear();
    var operatingYear = "";
    operatingYear += `<p class="operatingDate fs-6 m-0">Operating on ${currentYear}</div>`
    document.getElementById("operatingTime").innerHTML = operatingYear;
}

