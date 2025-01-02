const right = document.getElementById('right');
const inpRed = document.getElementById('inpRed');
const inpGreen = document.getElementById('inpGreen');
const inpBlue = document.getElementById('inpBlue');

function changeColor(){
    let red = inpRed.value;
    let green = inpGreen.value;
    let blue = inpBlue.value;
    
    //rgb(xxx, xxx, xxx)
    let color = `rgb(${red}, ${green}, ${blue})`;
    right.style.backgroundColor = color;
    document.getElementById("rgb").innerHTML = color;
}


//right.style.backgroundColor = color;

changeColor()


function random(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    inpRed.value = red;
    inpGreen.value = green;
    inpBlue.value = blue;
    
    //rgb(xxx, xxx, xxx)
    let color = `rgb(${red}, ${green}, ${blue})`;
    right.style.backgroundColor = color;
    document.getElementById("rgb").innerHTML = color;


}















