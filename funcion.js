const ratingContainer = document.getElementById('rating');
const thanksContainer = document.getElementById('thanks');

let ratingValue = document.getElementById('rating-value');

const ratingButtons = document.querySelectorAll('input[name="calification"]');
const submitButton = document.querySelector('.call-to-act');

let chosenValue = -1;

ratingButtons.forEach(element => {
    element.addEventListener('click', () => {
        chosenValue = element.value;
    })
})

submitButton.addEventListener('click', () => {
    if (chosenValue == -1) {
        alert('Debe elegir una opcion');
    }
    else {
        ratingValue.innerHTML = chosenValue;
        ratingContainer.classList.remove('d-block');
        ratingContainer.classList.add('d-none');

        thanksContainer.classList.remove('d-none');
        thanksContainer.classList.add('d-block');
    }
    
})

