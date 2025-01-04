function showMessage(answer) {
    const textField = document.getElementById('textField');
    const loveGif = document.getElementById('loveGif');
    const sadGif = document.getElementById('sadGif');

    if (answer === 'yes') {
        textField.innerHTML = 'YEAYYYY!!! I LOVE YOU TOO!!!';
        loveGif.style.display = 'block';
        sadGif.style.display = 'none';
    } else {
        textField.innerHTML = 'Oh no! That\'s sad!';
        loveGif.style.display = 'none';
        sadGif.style.display = 'block';
    }
    textField.style.display = 'block';
}

function moveButton() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}