import { images, initSlider} from './slider.js';

const apiKey = 'AIzaSyA4i5V61Z7_b7e8G5emhpHCAWzZRR0fCik';
const output = document.querySelector('.section__books-bookcards');
const category = document.querySelectorAll('.section__books-list-item');

category.forEach(item => {
    item.addEventListener('click', sendRequest)
})

function sendRequest(event) {
    if (event.target.classList.contains("active")) return;
    category.forEach(item => {
        if (item.classList.contains("active")) {
            item.classList.remove("active");
            return;
        }
    });

    event.target.classList.add("active");
    activeCategory = event.target.innerText;

    fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${event.target.innerText}"&key=${apiKey}&printType=books&projection=full&startIndex=0&maxResults=6&langRestrict=en`)
    .then((data) => data.json())
    .then((data) => {
        data.items.forEach (book => {
            const bookTemplate = `
            <div class="section__books-bookcards-item">
            <div class="section__books-bookcards-item-img">
            <img style="background-image:url(${book.imageLinks.thumbnail});" alt="book cover"></div>
            <div class="section__books-bookcards-item-info">
            <p>${book.volumeInfo.authors}</p>
            <h4>${book.volumeInfo.title}</h4>
            <p>${book.volumeInfo.description}</p>
            <h4></h4></div>`;
            output.innerHTML += bookTemplate;
        })
    })

 }
