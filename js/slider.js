let images = [{
    url: './img/slider-img1.png'
},{
    url: './img/slider-img2.png'
},{
    url: './img/slider-img3.png'
}]

function initSlider() {

    let sliderImg = document.querySelector('.section__slider-slider')
    let sliderDots = document.querySelector('.section__slider-dots')

    initImages();
    clickDots();
    initAutoplay();

    function initImages() {
        images.forEach((image, index) => {
           let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
           sliderImg.innerHTML += imageDiv;
           
           let dotsDiv =`<div class="section__slider-dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
           sliderDots.innerHTML += dotsDiv;
        })
    }

    function clickDots() {
        sliderDots.querySelectorAll('.section__slider-dots-item').forEach(dotsDiv => {
            dotsDiv.addEventListener('click', function() {
                moveSlider(this.dataset.index);
            })
        })
    }

    function initAutoplay() {
        setInterval(() => {
          let currentNumber = +sliderImg.querySelector(".active").dataset.index;
          let nextNumber = currentNumber === images.length - 1? 0 : currentNumber + 1;
          moveSlider(nextNumber);
        }, 5000);
    }
    

    function moveSlider(num) {
        sliderImg.querySelector(".active").classList.remove("active");
        sliderImg.querySelector(".n" + num).classList.add("active");
    
        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");
    }
           



}

document.addEventListener('DOMContentLoaded', initSlider)