const form = document.getElementById('textForm');


function displayUserInput(event) {
    event.preventDefault();

    const userInput = document.getElementsByName('userText')[0];
    const userInputDisplay = document.getElementById('userInputDisplay');

    userInputDisplay.textContent = userInput.value;
    console.log(userInput.value);
}

form.addEventListener('submit', displayUserInput);

