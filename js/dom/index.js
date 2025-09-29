// // const div  =  getelementbytagname('div');
// // div[0].innerHTML = "ABES ENGINEERING COLLEGE";
// // div[0].style.color = "red";
// // div[0].style.backgroundColor = "black";
// // div[0].style.textAlign = "center";
// // div[0].style.fontSize = "50px";
// // div[0].style.fontWeight = "bold";
// // div[0].style.padding = "20px";
// // div[0].style.margin = "20px";
// // div[0].style.border = "2px solid black";
// // div[0].style.borderRadius = "10px";

// // const div = document.getElementsByClassName('container');
// // div[0].innerHTML = "ABES ENGINEERING COLLEGE";
// // div[0].style.color = "red";
// // div[0].style.backgroundColor = "black";
// // div[0].style.textAlign = "center";
// //create a h2 tag
// // const h2 = document.createElement('h2');
// //append h2 tag to div
// // h2.innerHTML = "ABES ENGINEERING COLLEGE 21";
// // div[0].appendChild(h2);

// // const img = document.createElement('img');
// // img.src = "https://plus.unsplash.com/premium_photo-1673029926899-2625d5f4b71a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8";
// // div[0].appendChild(img);

// // function msg(){
// //     const text = document.createElement('p');
// //     text.innerHTML = "Welcome to abes engineering college";
// //     text.style.color = "white";
// //     text.style.backgroundColor = "brown";

// //     document.getElementsByClassName('text')[0].appendChild(text).addEventListener('click',msg);
// // }

// // img.addEventListener('click',msg);

// const button = document.getElementsByTagName('button');
// button[0].addEventListener('click',function(){
//     img.style.display = "block";
// });
// img.style.display = "none";


//blocking and unbloking code 
// function longTask(){
//     let sum = 0;
//     for(let i=0;i<10;i++){
//         // sum += i;
//         console.log(i); bhjkl;
//     }
//     return sum;
// }

// const button = document.getElementsByTagName('button');
// button[0].addEventListener('click',function(){
//     console.log('Button Clicked');
//     const result = longTask();
//     console.log(result);
// });


// console.log('start');//1
// Promise.resolve('Promise').then(function(res){
//     console.log(res);
// });//2
// setTimeout(function(){
//     console.log('setTimeout');
// },2000);//3

// console.log('end');//4

//output
// start
// end
// Promise
// Button Clicked

//callback function

//greet msg and msg handler

function greet(msg,handler){
    console.log(msg);
    handler();
}

function msgHandler(){
    console.log('This is msg handler');
}

greet('Hello World',msgHandler);


//new promise

const promise = new Promise((resolve,reject)=>{
    if(true){
        resolve('Promise Resolved');
    }else{
        reject('Promise Rejected');
    }
});


promise.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});
