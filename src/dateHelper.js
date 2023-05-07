// Date for website
// This uses Date() in js to display the date, time and other info
// Formatting is changed to my liking

// Grabs date element in html
const dateElement = document.getElementById("date");

// Defines funtion to format the time correctly
function showTime() {

  // Uses Date to retrieve information
  const date = new Date();

  // Sets options for correct formatting
  const options = {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour12: false,
  };

  // Formats the date in DD/MM/YY instead of MM/DD/YY
  const formattedDate = date.toLocaleString("en-GB", options);

  // Extract day of week, date, and time from formattedDate
  const [dayOfWeek, dateStr, time] = formattedDate.split(", ");

  // Format so it shows Day, HH:MM:SS | DD/MM/YY
  dateElement.innerHTML = `${dayOfWeek}, ${time} | ${dateStr}`;
}

// Sets the function to repeat every 1000ms (1s)
setInterval(showTime, 1000);

// Calls the function
showTime()



