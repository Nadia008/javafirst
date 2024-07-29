export function randomchik(){
    let a = Number(prompt("Введите 1 число"))
    let b = Number(prompt("Введите 2 число"))
    let range = Math.abs(a - b)
    let numberInRange = Math.round(Math.random() * range)
    let min = Math.min(a, b)
    alert(min + numberInRange)
}
randomchik()