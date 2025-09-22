// const div  =  getelementbytagname('div');
// div[0].innerHTML = "ABES ENGINEERING COLLEGE";
// div[0].style.color = "red";
// div[0].style.backgroundColor = "black";
// div[0].style.textAlign = "center";
// div[0].style.fontSize = "50px";
// div[0].style.fontWeight = "bold";
// div[0].style.padding = "20px";
// div[0].style.margin = "20px";
// div[0].style.border = "2px solid black";
// div[0].style.borderRadius = "10px";

const div = document.getElementsByClassName('container');
div[0].innerHTML = "ABES ENGINEERING COLLEGE";
div[0].style.color = "red";
div[0].style.backgroundColor = "black";
div[0].style.textAlign = "center";
//create a h2 tag
const h2 = document.createElement('h2');
//append h2 tag to div
h2.innerHTML = "ABES ENGINEERING COLLEGE 21";
div[0].appendChild(h2);

const img = document.createElement('img');
img.src = "https://plus.unsplash.com/premium_photo-1673029926899-2625d5f4b71a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8";
div[0].appendChild(img);

// function msg(){
//     const text = document.createElement('p');
//     text.innerHTML = "Welcome to abes engineering college";
//     text.style.color = "white";
//     text.style.backgroundColor = "brown";

//     document.getElementsByClassName('text')[0].appendChild(text).addEventListener('click',msg);
// }

// img.addEventListener('click',msg);

const button = document.getElementsByTagName('button');
button[0].addEventListener('click',function(){
    img.style.display = "block";
});
img.style.display = "none";

