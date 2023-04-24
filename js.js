
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav');

menuToggle.addEventListener('click', function() {
    navigation.classList.toggle('active');
});


const events = document.querySelectorAll('.event');

events.forEach(event => {
    const details = event.querySelector('.event__details');
    const button = event.querySelector('.event__button');

    button.addEventListener('click', function() {
        details.classList.toggle('active');
        button.textContent = details.classList.contains('active') ? 'Hide Details' : 'Show Details';
    });
});


const musicItems = document.querySelectorAll('.music__item');

musicItems.forEach(musicItem => {
    const audio = musicItem.querySelector('audio');
    const playButton = musicItem.querySelector('.play-button');

    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playButton.classList.add('active');
        } else {
            audio.pause();
            playButton.classList.remove('active');
        }
    });
});


const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const submitButton = document.querySelector('#submit-button');
const successMessage = document.querySelector('.success-message');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if (name === '' || email === '' || message === '') {
        errorMessage.textContent = 'Please fill in all fields';
        successMessage.textContent = '';
    } else if (!emailRegex.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address';
        successMessage.textContent = '';
    } else {
        errorMessage.textContent = '';
        successMessage.textContent = 'Message sent successfully';
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
});
