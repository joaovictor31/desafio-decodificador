let texto__entrada = document.querySelector('.input-text');
let botao__criptografar = document.querySelector('.criptografar');
let botao__descriptografar = document.querySelector('.descriptografar');
let resultado__saida = document.querySelector('.resposta');
let imagem = document.querySelector('.imagem');
let subtitulo = document.querySelector('.subtitulo');
let copiar = document.querySelector('.copiar'); 

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
    imagem.style.display = 'none';
    subtitulo.style.display = 'none';
    copiar.style.display = 'block';
    

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

//Função para copiar o texto
    function copiarTexto() {
        let textoParaCopiar = resultado__saida.textContent; // Obtém o texto descriptografado
        navigator.clipboard.writeText(textoParaCopiar)
            .then(() => {
                alert('Texto copiado para a área de transferência!');
            })
            .catch(err => {
                console.error('Erro ao copiar o texto: ', err);
            });
}

botao__criptografar.addEventListener('click', criptografar);
botao__descriptografar.addEventListener('click', descriptografar);
copiar.addEventListener('click',copiarTexto);
