export function celsTo () {
    let grade = Number(prompt("Введите градусы °C"))
    let farengeight = grade * 1.8 + 32
    let kelvin = grade + 273.15
    alert (`Ответ: ${farengeight}°F и ${kelvin}К`)
}
celsTo()