var timeFunctionRan = false;

window.onload = () => {
    document.getElementById("timeButton").addEventListener("click", handleClick);
};

const handleClick = (e) => {
    e.preventDefault();
    timeFunctionRan === false ? getTime() : hideTime();
};

const getTime = () => {
    const todaysDate = new Date().toLocaleDateString();
    const localBSTTime = new Date().toLocaleTimeString("en-GB");
    const returnedString = `${todaysDate} ${localBSTTime}`;

    const timeString = `<div id="timeString" class="col-6 justify-content-start align-items-center d-flex"><p class="localBSTTime fs-4 my-0 mx-3">${returnedString}</p></div>`;
    document.getElementById("secondSection").insertAdjacentHTML("beforeend", timeString);

    const timeContainer = document.getElementById("timeContainer");
    timeContainer.classList.remove("justify-content-center");
    timeContainer.classList.add("justify-content-end");

    timeFunctionRan = true;

    const timeButton = document.getElementById("timeButton");
    timeButton.innerHTML = "Close Local Time";
};



const hideTime = () => {
    const timeSection = document.getElementById("timeString");
    timeSection.remove();

    const timeContainer = document.getElementById('timeContainer');
    timeContainer.classList.add("justify-content-center");

    timeFunctionRan = false;

    const timeButton = document.getElementById("timeButton");
    timeButton.innerHTML = "Click for Local Time";
}
