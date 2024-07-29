export function isNumber(value) {
    return !isNaN(value) && value.trim() !== '';
}


let firstNumber = prompt("Введите первое число:");


if (!isNumber(firstNumber)) {
    alert("Пожалуйста, введите корректное число.");
} else {

    let secondNumber = prompt("Введите второе число:");


    if (!isNumber(secondNumber)) {
        alert("Пожалуйста, введите корректное число.");
    } else {

        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);

        let operation = prompt("Введите операцию (сложение, вычитание, умножение, деление, остаток)")
        if (operation === "сложение") {
             alert(firstNumber + secondNumber) 
         }
         if (operation === "вычитание") {
            alert(firstNumber - secondNumber) 
        }
         if (operation === "умножение") {
             alert(firstNumber * secondNumber) 
         }
         if (operation === "деление") {
             alert(firstNumber / secondNumber) 
         }
         if (operation === "остаток") {
             alert(firstNumber % secondNumber) 
        }
        else {
             alert("Неправильный ввод операции!")
    }
}
}
isNumber()