const navbarBtn = document.querySelector('.nav-menu-btn');
const navbarMenu = document.querySelector('.right-links');

navbarBtn.addEventListener('click', () => {
    if (navbarBtn.classList.contains('active') === false) {
        navbarMenu.style = `right : -301px;`
    }
    
    navbarBtn.addEventListener('click', function (e){
        e.preventDefault();
        if (navbarBtn.classList.contains('active')) {
            navbarBtn.classList.remove('active');
            navbarMenu.style = `right: -301px; transition : right 0.5s; z-index: 21;`
            
        } else {
             navbarBtn.classList.add('active');
            navbarMenu.style = `right: 0; transition : right 0.5s; z-index: 21;`
        }
    })
    navbarMenu.addEventListener('mouseup', function (e) {
        e.stopPropagation();
    })
    document.addEventListener('mouseup', function (e) {
        if (e.target != navbarBtn) {
            navbarMenu.style = `right: -301px; transition : right 0.5s; z-index: 21;`;
            navbarBtn.classList.remove('active');
        }
    })
})

const iconLike = document.querySelector('.icon-like');

iconLike.addEventListener('click', () => {
    
        if(event.target.classList.contains('red')){
            event.target.classList.remove('red')
        }else{
           event.target.classList.add('red')
        }
})


const slider1Track = document.querySelector('.slider1-track');

let currentIndex = 0;

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let width = document.querySelector('.slider1-item').offsetWidth;

console.log(slider1Track);
console.log(prev);
console.log(next);


// slider1Track.style.left += slider1Track.offsetWidth * currentIndex;

prev.addEventListener('click', () => {
    // if(event.currentTarget){
       if(currentIndex > 0){
        currentIndex--;
        console.log(currentIndex);
        slider1Track.style.transform = `translateX(${-width * currentIndex})px`;
        slider1Track.style.left = `${width * currentIndex}px`
       }
    // }
})

next.addEventListener('click', () => {
    // if(event.currentTarget){
        if(currentIndex >= document.querySelectorAll('.slider1-item').length - 1){
            currentIndex = 0;
            slider1Track.style.transform = `translateX(${width * currentIndex})px`;
            slider1Track.style.left = `${-width * currentIndex }px`
        }
        else{
            currentIndex++;
            console.log(currentIndex);
            slider1Track.style.transform = `translateX(${width * currentIndex})px`;
            slider1Track.style.left = `${-width * currentIndex}px`
        }
    // }
})


const slider2Track = document.querySelector('.slider2-track');

const prevSlider2 = document.querySelector('.slider2-block .prev');
const nextSlider2 = document.querySelector('.slider2-block .next');

let width2 = document.querySelector('.slider2-item').offsetWidth;

console.log(slider1Track);
console.log(prev);
console.log(next);


// slider1Track.style.left += slider1Track.offsetWidth * currentIndex;

prevSlider2.addEventListener('click', () => {
    // if(event.currentTarget){
       if(currentIndex > 0){
        currentIndex--;
        console.log(currentIndex);
        slider2Track.style.transform = `translateX(${-width * currentIndex})px`;
        slider2Track.style.left = `${width2 * currentIndex}px`
       }
    // }
})

nextSlider2.addEventListener('click', () => {
    // if(event.currentTarget){
        if(currentIndex >= document.querySelectorAll('.slider1-item').length - 1){
            currentIndex = 0;
            slider2Track.style.transform = `translateX(${width * currentIndex})px`;
            slider2Track.style.left = `${-width2 * currentIndex }px`
        }
        else{
            currentIndex++;
            console.log(currentIndex);
            slider2Track.style.transform = `translateX(${width * currentIndex})px`;
            slider2Track.style.left = `${-width2 * currentIndex}px`
        }
    // }
})


const sliderCommentsTrack = document.querySelector('.slider-comments-track');

const prevSlider3 = document.querySelector('.slider-comments-block .prev');
const nextSlider3 = document.querySelector('.slider-comments-block .next');

let width3 = document.querySelector('.comment').offsetWidth;

console.log(slider1Track);
console.log(prevSlider3);
console.log(nextSlider3);


// slider1Track.style.left += slider1Track.offsetWidth * currentIndex;

prevSlider3.addEventListener('click', () => {
    // if(event.currentTarget){
       if(currentIndex > 0){
        currentIndex--;
        console.log(currentIndex);
        sliderCommentsTrack.style.transform = `translateX(${-width3 * currentIndex})px`;
        sliderCommentsTrack.style.left = `${width3 * currentIndex}px`
       }
    // }
})

nextSlider3.addEventListener('click', () => {
    // if(event.currentTarget){
        if(currentIndex >= document.querySelectorAll('.comment').length - 1){
            currentIndex = 0;
            sliderCommentsTrack.style.transform = `translateX(${width3 * currentIndex})px`;
            sliderCommentsTrack.style.left = `${-width3 * currentIndex }px`
        }
        else{
            currentIndex++;
            console.log(currentIndex);
            sliderCommentsTrack.style.transform = `translateX(${width3 * currentIndex})px`;
            sliderCommentsTrack.style.left = `${-width3 * currentIndex}px`
        }
    // }
})

const comments = document.querySelectorAll('.comment');

const ul = document.createElement('ul');
ul.classList.add('slider__dots');
comments.forEach(() => {
    const li = document.createElement('li');
    ul.appendChild(li);
})

document.querySelector('.comments-content').appendChild(ul);

const dots = document.querySelectorAll('.slider__dots li');
const thisSlide = (index) => {
    for(let dot of dots){
        dot.classList.remove('active')
    }

    dots[index].classList.add('active')
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
       position = width3 * index;

       sliderCommentsTrack.style.left = -position + 'px';

       dotIndex = index;
       thisSlide(dotIndex)
    })
})



