const textoInput = document.getElementById('qualquercoisa')
const botao = document.getElementById('iddobotao')
const mensagem = document.getElementsByTagName('p')

botao.addEventListener("click", function (){
    const valorTexto = textoInput.value;
    if (valorTexto == ""){
    mensagem[0].textContent = 'escreva alguma coisa'
} else {
    mensagem[0].textContent = 'voce escreveu: ${valorTexto}'
}
})