// if (2*4 == 8) {
//    console.log("Верно!")
// } 

// if (2 * 4 == 7) {
//    console.log("Верно!")
// } else {
//    console.log("Неверно")
// }

// ВЛОЖЕННОСТЬ УСЛОВИЙ

let num = 50;

// if (num < 49) {
//    console.log("Неверно")
// } else if (num > 100) {
//    console.log("Много")
// } else {
//    console.log("Это так")
// };

   
// // Запись в виде тернарного оператора

// (num == 50) ? console.log("Верно") : console.log("Неверно");


// Функция switch - которая поддерживает сразу несколько условий (используется для сокращенной записи)
switch (num) {
   case num < 49:
      console.log("неверно");
      break;
   case num > 100:
      console.log("Много");
      break;
   case num > 80:
      console.log("Еще много");
      break;
   case 50:
      console.log("Верно");
      break;
   default:
      console.log("Что-то пошло не так");
      break;
};


let rose = 100;

switch (rose) {
   case rose < 95:
      console.log("Не может быть");
      break;
   case rose > 155:
      console.log("ДА ну нах");
      break;
   case rose = 200:
      console.log("Вы серьезно?");
      break;
   case 100:
      console.log("Все правильно");
      break;
   default:
      console.log("В жопу это программирование");
      break;
};