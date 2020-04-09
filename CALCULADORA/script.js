function num1() {
    let texto = document.getElementById('txtcal')
    let n1 = document.getElementById('num1')
    let numero = Number(n1.value)
    let item = document.createElement('option')
    item.text = numero
    texto.appendChild(item)
}
