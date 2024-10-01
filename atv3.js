document.getElementById("bt_tarefa").addEventListener("click", addTarefa)

//quando for add uma tarefa, add no local storage tb
let listaTarefa = JSON.parse(localStorage.getItem('tarefas')) || []

//nao permitir o usuario add duas tarefas iguais

//limpar o input qdo add uma tarefa

//fazer um laço for para cada tarefa, chamar a func
listaTarefa.forEach(element => {
    criarElemento(element)
})


//quando remover uma  tarefa, remover do local storage tb
function addTarefa(){

    //pegar o valor dentro do input e armazenar em uma variavel
    const inputTarefa = document.getElementById ("input_tarefa").value
    console.log(inputTarefa)

    //verificar o valor do input e dar um alert se estiver vazio
    if(!inputTarefa){
    alert('o input está vazio')
    return
    }

    //adiciona tarefa no array de tarefas
    listaTarefa.push(inputTarefa)

    //coloca a lista no localStorage e transforma o array em string
    localStorage.setItem('tarefas', JSON.stringify(listaTarefa))

    criarElemento(inputTarefa)
}

function criarElemento(inputTarefa) {
    //criar o elemento <li>
    const elemento_tarefa = document.createElement('li')
    elemento_tarefa.className = "item_tarefa"

    //adicionar o texto do input no novo <li>
    const conteudoTarefa = document.createElement('p')
    conteudoTarefa.textContent = inputTarefa

    //adicionar um botão para deletar tarefa no novo <li>
    const botaoDeletar = document.createElement('button')
    botaoDeletar.textContent = "Deletar tarefa"
    botaoDeletar.addEventListener('click', () => {
        
        //remove um elemento da tarefa
        elemento_tarefa.remove()

        //filtra a tarefa a ser removida
        listaTarefa = listaTarefa.filter((tarefa) => tarefa !== inputTarefa)

        //salva dnv
        localStorage.setItem('tarefas', JSON.stringify(listaTarefa))
    })

    //adicionar um botão para concluir tarefa no <li>
    const botaoConcluir = document.createElement('button')
    botaoConcluir.textContent = "Concluir tarefa"
    botaoConcluir.addEventListener('click', () => {
        conteudoTarefa.classList.toggle('completada')
    })

    //adicionar o novo elemento <li> a tag <ul>
    elemento_tarefa.appendChild(conteudoTarefa)
    elemento_tarefa.appendChild(botaoDeletar)
    elemento_tarefa.appendChild(botaoConcluir)
    document.getElementById('lista_tarefa').appendChild(elemento_tarefa)
}
