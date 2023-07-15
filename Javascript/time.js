var timeFunctionRan = false;

document.getElementById("timeButton").addEventListener("click", (e) => {
    e.preventDefault();
    if (timeFunctionRan === false) {
        getTime();
    } else {
        return;
    }
});

function getTime() {
    var time = "";
    localBSTTime = new Date().toLocaleDateString();
    time += `<div class="col-6 justify-content-start align-items-center d-flex"><p class="localBSTTime fs-4 my-0 mx-3"> ${localBSTTime} </p></div>`;
    document.getElementById("localTime").insertAdjacentHTML("beforeend", time);
    document.getElementById("timeContainer").classList.remove("justify-content-center");
    document.getElementById("timeContainer").classList.add("justify-content-end");
    timeFunctionRan = true;
}