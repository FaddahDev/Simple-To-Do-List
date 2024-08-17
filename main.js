// let btn= document.getElementById('btn');
// let result = document.getElementById('result');
// let test = document.getElementById('test')
// let input = document.getElementById('input')



// btn.addEventListener('click', ()=>{
//     // result.style.width='300px';
//     // result.style.height='300px';
//     // result.style.backgroundColor='tan';
//     result.style.cssText= 'width: 300px; height: 300px; background-color: tan'
// });


// btn.addEventListener('dblclick', ()=>{
//     // result.style.width='300px';
//     // result.style.height='300px';
//     // result.style.backgroundColor='tan';
//     result.style.cssText= 'width: 400px; height: 350px; background-color: red'
// });

// test.addEventListener('mouseenter', ()=>{
//     // result.style.cssText= 'width: 400px; height: 350px; background-color: red'
//     result.style.width='300px';
//     result.style.height='300px';
//     result.style.backgroundColor='red';
// });
// test.addEventListener('mouseleave', ()=>{
//     // result.style.cssText= 'width: 400px; height: 350px; background-color: red'
//     result.style.width='200px';
//     result.style.height='200px';
//     result.style.backgroundColor='teal';
// });

// test.addEventListener('mouseover', ()=>{
//     // result.style.cssText= 'width: 400px; height: 350px; background-color: red'
//     result.style.width='300px';
//     result.style.height='300px';
//     result.style.backgroundColor='red';

// });


// input Event listeners ---------------------

// input.addEventListener('keydown', ()=>{
//     console.log("test key down");

// });


// input.addEventListener('focus', ()=>{
//     console.log("test focus");

// });
// input.addEventListener('blur', ()=>{
//     console.log("test blur");

// });
// input.addEventListener('change', ()=>{
//     console.log("test change");

// });

// To Do List
// Drag And Drop ------------------------------------------

let input = document.getElementById("input");
let btn = document.getElementById('add');
let boxes = document.querySelectorAll('.box');
let selectedItem = null;

btn.addEventListener('click', () => {
    if (input.value != "") {
        boxes[0].innerHTML += `<p draggable="true" class="task">${input.value}</p>`
    };
    input.value = '';
    drag();
})

function drag() {
    let tasks = document.querySelectorAll('.task');
    tasks.forEach((task) => {
        task.addEventListener('dragstart', () => {
            selectedItem = task;
            task.style.cssText = 'opacity: 0.5; border-radius: 5px;'
        })

        task.addEventListener('dragend', () => {
            selectedItem = null;
            task.style.cssText = 'opacity: 1; border-radius: 5px;'
        })

        boxes.forEach((box) => {
            box.addEventListener('dragover', (e) => {
                e.preventDefault();
                box.style.backgroundColor = 'tan';
                box.style.color = 'white';
            });
            box.addEventListener('dragleave', () => {

                box.style.backgroundColor = 'white';
                box.style.color = 'black';
            });
            
            box.addEventListener('drop', () => {
                box.appendChild(selectedItem);
                box.style.backgroundColor = 'white';
                box.style.color = 'black';
            })

        });

    });
}







