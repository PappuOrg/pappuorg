function startLuckyDraw() {
    const resultMessage = document.getElementById('result');
    const userNumberInput = document.getElementById('userNumber');

    // Get the user-selected number
    const userNumber = parseInt(userNumberInput.value);

    // Validate user input
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 9) {
        resultMessage.textContent = 'Please choose a valid number between 1 and 9.';
        return;
    }

    // Simulate the lucky draw with a random number
    const luckyDrawNumber = Math.floor(Math.random() * 9) + 1;

    // Check if the user's number matches the lucky draw number
    if (userNumber === luckyDrawNumber) {
        resultMessage.textContent = `Congratulations! You won by matching the lucky draw number (${luckyDrawNumber}).`;
    } else {
        resultMessage.textContent = `Sorry, better luck next time. The lucky draw number was ${luckyDrawNumber}.`;
    }
}
