const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const alternativeTexts = {
    'pic1.jpg' : 'Eye', 
    'pic2.jpg' : 'Rock', 
    'pic3.jpg' : 'Flowers', 
    'pic4.jpg' : 'Ancient Egyptian picture', 
    'pic5.jpg' : 'Moth'
}

/* Looping through images */
for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alternativeTexts[image]);
    thumbBar.appendChild(newImage);
    // Set the clicked image to be displayed
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */
// React to 'click'
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        // Darkening function
        btn.setAttribute('class', 'light');
        btn.textContent = 'lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else {
        // Lightening function
        btn.setAttribute('class', 'dark');
        btn.textContent = 'darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});