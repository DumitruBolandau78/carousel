const cards = document.querySelectorAll('.card');
const leftArr = document.querySelector('.icon-left');
const rightArr = document.querySelector('.icon-right');

let counter = 1;
let counterNext = 2;

rightArr.addEventListener('click', () => {
    if(counter === cards.length - 1){
        counter = 0;
        cards.forEach(item => {
            item.classList.remove('active');
        });
        cards[counter].classList.add('active');
    } else {
        counter++;
        cards.forEach(item => {
            item.classList.remove('active');
        });
        cards[counter].classList.add('active');
    }


    if(counterNext === cards.length - 1){
        counterNext = 0;
        cards.forEach(item => {
            item.classList.remove('pre-active');
        });
        cards[counterNext].classList.add('pre-active');
    } else {
        counterNext++;
        cards.forEach(item => {
            item.classList.remove('pre-active');
        });
        cards[counterNext].classList.add('pre-active');
    }
});

leftArr.addEventListener('click', () => {
    if(counter === 0){
        counter = cards.length - 1;
        cards.forEach(item => {
            item.classList.remove('active');
        });
        cards[counter].classList.add('active');
    } else {
        counter--;
        cards.forEach(item => {
            item.classList.remove('active');
        });
        cards[counter].classList.add('active');
    }



    if(counterNext === 0){
        counterNext = cards.length - 1;
        cards.forEach(item => {
            item.classList.remove('pre-active');
        });
        cards[counterNext].classList.add('pre-active');
    } else {
        counterNext--;
        cards.forEach(item => {
            item.classList.remove('pre-active');
        });
        cards[counterNext].classList.add('pre-active');
    }
});