import "./styles.css";
import "./dom.js"
require('dotenv').config()
const WEATHER_API_KEY = process.env.WEATHER_API_KEY

// TODO: Search bar functionality


// TODO: Handle submit functionality
function handleLocationSubmit () {
    return null;
}

// TODO: Search sumbit functionality
const submitLocationBtn = document.getElementById("submitLocationBtn");

// TODO: Function to clean form input
function cleanFormInput (input) {
    if (!input) return;
    let cleaned = input.trim();

    // Replace special HTML Characters to prevent XSS
    cleaned = cleaned
        .replace(/\s+/g, ' ')
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039");
}







