import fetch from "node-fetch";

// Function to send GET request
function sendRequest() {
    fetch("https://node-push-notifications-otcu.onrender.com")
        .then(response => response.text()) // Assuming it returns HTML
        .then(data => console.log("Request sent at:", new Date().toLocaleTimeString(), "\nResponse:\n", data))
        .catch(error => console.error("Error:", error));
}

// Send request every 4 seconds
setInterval(sendRequest, 4000);
