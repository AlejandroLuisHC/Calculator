// function to toggle between light and dark theme
function toggleTheme() {
    var theme = document.getElementById("themes");
    if (theme.getAttribute("href") == "style-light.css") {
        theme.href = "style-dark.css";
    } else {
        theme.href = "style-light.css";
    }
}



  