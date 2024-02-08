function toggleContent() {
    let button = document.getElementsByClassName("button")[0];
    let extraDiv = document.getElementById("extra");

    if (button.textContent === "More") {
        extraDiv.style.display = "block";
        button.textContent = "Less";
    } else {
        extraDiv.style.display = "none";
        button.textContent = "More";
    }
}
    