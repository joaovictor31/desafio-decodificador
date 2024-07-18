let texto__entrada = document.querySelector('.input-text');
let botao__criptografar = document.querySelector('.criptografar');
let botao__descriptografar = document.querySelector('.descriptografar');
let resultado__saida = document.querySelector('.resposta');

// Função para criptografar o texto
function criptografar() {
    let texto__conteudo = texto__entrada.value;
    let textoCriptografado = texto__conteudo
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    resultado__saida.textContent = textoCriptografado;
}

// Função para descriptografar o texto
function descriptografar() {
    let texto__conteudo = texto__entrada.value;
    let textoDescriptografado = texto__conteudo
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    resultado__saida.textContent = textoDescriptografado;
}

botao__criptografar.addEventListener('click', criptografar);
botao__descriptografar.addEventListener('click', descriptografar);
