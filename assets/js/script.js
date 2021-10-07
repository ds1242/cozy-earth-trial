async function displayCard (event) {
    event.preventDefault();
    let cardDisplay = document.getElementById("cardCollapse");
    let listDisplay = document.getElementById("explore-list");

    if(cardDisplay.style.visibility === "hidden") {
        cardDisplay.style.visibility = "visible";
        listDisplay.style.visibility = "hidden";
    } else {
        cardDisplay.style.visibility = "hidden";
        listDisplay.style.visibility = "visible";
    }
};

document.getElementById('cardCloseButton').addEventListener('click', displayCard);
document.getElementById("button").addEventListener('click', displayCard);