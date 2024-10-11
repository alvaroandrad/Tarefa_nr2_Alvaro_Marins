// Questão 1

/* function infoLevel(){
    if(myBtn.classList.contains('btn-success')){
        myBtn.classList.remove('btn-success'); //remove classe do elemento
        myBtn.classList.add('btn-warning'); // adiciona classe ao elemento
    }else{
        myBtn.classList.remove('btn-warning');
        myBtn.classList.add('btn-success')
    }
} */

let myBtn = document.querySelector('#btn1');
let myBtn2 = document.querySelector('#btn2');
let myBtn3 = document.querySelector('#btn3');

function changeColor (btnr, color) {
    if(btnr == 1){
        myBtn.style.backgroundColor =color ;
        myBtn.style.color = 'white'; 
    }
    if(btnr == 2){
        myBtn2.style.backgroundColor = color;
        myBtn2.style.color = 'white'; 
    }

    if(btnr == 3){
        myBtn3.style.backgroundColor = color;
        myBtn3.style.color = 'white'; 
    }

}
function changeColor2 () {
    myBtn2.style.backgroundColor = 'blue';
    myBtn.style.color = 'white';
}
function changeColor3 () {
    myBtn3.style.backgroundColor = 'green';
    myBtn.style.color = 'white';
}

// Questão 2 

let Questao = document.getElementById('qst2');
let addP = document.createElement('p');

function createP () {    
    addP.innerText = 'É só mais um esforço para o curso de Front-end e serei um grande programador.'
}
document.body.appendChild(addP);


// Questão 5



let lista = document.querySelectorAll('li');
let listBtn =document.getElementById('btnList');

listBtn.onclick = function () {
    for (let item of lista){
        item.append(' -- Aprendido');
    } 
}

// Questão 6

let btnPrompt = document.querySelector('#btnMais');
console.log(btnPrompt);

btnPrompt.onclick = function () {
    let text = prompt('Você aprendeu algo mais?');
    let addLi = document.createElement('li');
addLi.innerText = text;
    let myUl = document.querySelector('ul');
    myUl.appendChild(addLi);
}

