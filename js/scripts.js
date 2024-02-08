// constants for query selector
const myStudentId = document.querySelector('#myStudentId');
const customNumber = document.querySelector('#customNumber');
const custColor = document.querySelector('.custColor');
const randColor = document.querySelector('.randColor');
const imageSelect = document.querySelector('#imageSelect');
const images = document.querySelector('#images');


// function to change bg color from user input and add student id
function changeCustomColor() {
    let inputNumber = parseInt(customNumber.value);
    let color;
    if(inputNumber<0 || inputNumber>100){
        color = 'red';
    }
    else if(inputNumber>=0 && inputNumber<=20){
        color = 'green';
    }
    else if(inputNumber>20 && inputNumber<=40){
        color = 'blue';
    }
    else if(inputNumber>40 && inputNumber<=60){
        color = 'orange';
    }
    else if (inputNumber>60 && inputNumber<=80){
        color = 'purple'
    }
    else if(inputNumber>80 && inputNumber<=100){
        color='yellow'
    }
    document.body.style.backgroundColor = color;
    myStudentId.textContent = "Student ID: 200553417";
}

// function to change bg color from random no.
function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let color;
    if(randomNumber < 0 || randomNumber > 100){
        color = 'red';
    }
    else if(randomNumber >= 0 && randomNumber <= 20){
        color = 'green';
    }
    else if(randomNumber > 20 && randomNumber <= 40){
        color = 'blue';
    }
    else if(randomNumber > 40 && randomNumber <= 60){
        color = 'orange';
    }
    else if (randomNumber > 60 && randomNumber <= 80){
        color = 'purple';
    }
    else if(randomNumber > 80 && randomNumber <= 100){
        color = 'yellow';
    }
    document.body.style.backgroundColor = color;
    console.log(randomNumber);
    myStudentId.textContent = "Student ID: 200553417";
}

// function to generate options for select list
function addList() {
    const imageOptions = ["./img/img1.jpg", "./img/img2.jpg", "./img/img3.jpg", "./img/img4.jpg", "./img/img5.jpg"];
    for(let i = 0; i < imageOptions.length; i++) {
        const option = document.createElement("option");
        option.text = imageOptions[i];
        option.value = imageOptions[i]; // No need to prepend "img/" here
        imageSelect.appendChild(option);
    }
}

// function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    images.src = selectedImage;
}

// event listeners for on click event of buttons and select
custColor.addEventListener('click', changeCustomColor);
randColor.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('change', changeImage);

// Generate options for select list on page load
window.onload = addList;
