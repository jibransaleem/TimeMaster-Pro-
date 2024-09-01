const time_display = document.querySelector(".clock_box");
const digitl12_hour = document.querySelector("#hours_format");
const day_format = document.querySelector("#day_format");
const stop_watch = document.querySelector("#count_down");
const stop = document.querySelector("#stop");
let h1 = document.querySelector("#h1");

const color_array = ["#333333", "#2F4F4F", "#2a2d2f", "#191970", "#483D8B", "#3D3D3D", "red", "white"];
let colorIndex = 0; 

setInterval(function() {
    h1.style.color = color_array[colorIndex]; // Set the color of h1
    colorIndex = (colorIndex + 1) % color_array.length; // Move to the next color in the array
}, 1000); // Change color after every 1 sec

let interval_Id; // For 12-hour and 24-hour formats
let stopwatch_Id; // For stopwatch

// 12-Hour Format
digitl12_hour.addEventListener("click", () => {
    clearInterval(stopwatch_Id); // Clear any existing stopwatch interval
    stop.style.visibility = "hidden";
    clearInterval(interval_Id); // Clear any existing time format interval
    interval_Id = setInterval(() => {
        let date = new Date();
        time_display.innerHTML = `<h2>${date.toLocaleTimeString()}</h2>`;
    }, 1000);
});

// 24-Hour Format
day_format.addEventListener("click", () => {
    clearInterval(stopwatch_Id); // Clear any existing stopwatch interval
    stop.style.visibility = "hidden";
    clearInterval(interval_Id); // Clear any existing 12-hour format interval
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const now = new Date().toLocaleTimeString('en-US', options);
    time_display.innerHTML = `<h2>${now}</h2>`;
});

// Stopwatch
stop_watch.addEventListener("click", () => {
    clearInterval(interval_Id); // Clear any existing time format intervals
    stop.style.visibility = "visible"; // Show the stop button

    let count = 0;
    stopwatch_Id = setInterval(() => {
        count += 1;
        time_display.innerHTML = `<h2>${count} seconds</h2>`;
    }, 1000);
});

// Stop Button
stop.addEventListener("click", () => {
    clearInterval(stopwatch_Id); // Stop the stopwatch
    stop.style.visibility = "hidden"; // Hide the stop button
});
