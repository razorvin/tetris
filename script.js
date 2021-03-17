let main = document.querySelector(".main");

let playfild = //Игровое поле
[
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], //0
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0,], //1
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0,], //2
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0,], //3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], //4
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], //5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], //6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], //7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], //8
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], //9
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], //10
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], //11
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], //12
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], //13
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], //14
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], //15
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], //16
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], //17
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], //18
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]  //19
]  //1  2  3  4  5  6  7  8  9  10

// function draw() Рисует игровую сетку.
function draw(){
let mainInnerHTML = "";
let y; //Ряды
let x; //Конкретная ячейка
for(y = 0; y < playfild.length; y++){
    for(x = 0; x < playfild[y].length; x++){
        if(playfild[y][x] === 1){
            mainInnerHTML += '<div class="cell movingCell"></div>';
        }else{
            mainInnerHTML = mainInnerHTML + '<div class="cell"></div>'; //mainInnerHTML += '<div class="cell"></div>';
        }
    }
}
main.innerHTML = mainInnerHTML;
}
//function moveTetroDown двигает фигуру в низ.
function moveTetroDown(){
if(canMoveTetroDown()){    
    let y; //Ряды
    let x; //Конкретная ячейка
        for(y = playfild.length - 1; y >= 0 ; y--){
            for(x = 0; x < playfild[y].length; x ++){
                if(playfild[y][x] === 1){
                    playfild[y + 1][x] = 1; //К ряду добовляем + 1 и к ячейки присваеваем 1
                    playfild[y][x] = 0; // Затераем ячейку выше, к ячейки присваеваем 0     
                }
            }
        }
    }
}

//function canMoveTetroDown Фиксит ошибку 
function canMoveTetroDown(){
    for(y = 0; y < playfild.length; y++){
        for(x = 0; x < playfild[y].length; x++){
            if(playfild[y][x] === 1){
                if(y === playfild.length - 1){
                    return false;
                }
            }
        }        
    }
    return true;
}

//Запускает игру 
var speedGame = 1000; // Переменная скорость игры.
draw();
function startGame(){ 
    moveTetroDown();
    draw();
    setTimeout(startGame,speedGame);
}
setTimeout(startGame,speedGame);

console.log(playfild);