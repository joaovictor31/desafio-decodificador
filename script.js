let texto = document.querySelector('.input-text')
let botao__criptografar = document.querySelector('.criptografar')
let botao__descriptografar = document.querySelector('.descriptografar')

function criptografar(){
    texto = texto.value
    let lista = texto.split("");
    lista.forEach(function)
    texto_novo = texto.replace('e','enter')
    console.log(lista)
}

botao__criptografar.addEventListener('click',criptografar)

console.log('nada')