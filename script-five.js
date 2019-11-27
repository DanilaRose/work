'use strict';

// ЦИКЛЫ

// 1 СПОСОБ
let num = 50;

// while (num < 55) {
//    console.log(num);
//    num++; // увеличиваем значение переменной на 1
// }

// 2 СПОСОБ - такой цикл необходим только ттогда, когда мы хотим что-то сделать, а потом проверить это условие
// do {
//    console.log(num);
//    num++;
// }
// while (num < 55); 

// 3 СПОСОБ

// for (let i = 1; i < 8; i++) {  // Сначала создаем переменную, затем указываем условие для данной переменной, потом записываем действие, совершаемое с данной переменной. И в конце записываем также действие, например "console.log()".
//    if (i == 6) {  // Можно указать дополнительные условия для переменной (например, в данном случа, если переменная равно 6, то цифра 6 исключается из цикла)
//       break;  // Действие, которое является следствием условия (Например, "break" - означает, что когда значение достигнет 5 (включительно), цикл прекращается)
//    }
//    console.log(i);
// };

for (let i = 1; i < 8; i++) { // 1) Создаем переменную 2) Условие 3) Действие
   if (i == 6) { // Условие
      continue; // Данное действие означает, что цифра 6 не отображается, но достигнув 6 цикл не завершается
   }
   console.log(i);
}

// for (let number = 3; number < 10; number++) {  
//    console.log(number);
// };

for (let number = 1; number > 0 ; number++) {  // Нельзя создавать циклы, в которых существует только значение "true", иначе он будет бесконечным и браузер зависнет. Например, в данном случае значение переменной всегда будет больше 0 и цикл не завершится
    
}