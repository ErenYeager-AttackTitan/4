import fetch from "node-fetch";

// Function to send POST request
function sendRequest() {
    fetch("https://node-push-notifications-otcu.onrender.com/subscribe", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: "Anime Reminder" }) // Your JSON data
    })
    .then(response => response.text()) // Handle HTML response
    .then(data => console.log("Request sent at:", new Date().toLocaleTimeString(), "\nResponse:\n", data))
    .catch(error => console.error("Error:", error));
}

// Send request every 4 seconds
setInterval(sendRequest, 4000);
