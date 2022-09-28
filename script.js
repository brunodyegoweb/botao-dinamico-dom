let area = document.getElementById("area")

function acessar() {
    let nome = prompt('Digite o seu nome: ')
    if (nome==="" || nome === null){
        alert("[ERRO] Você não preencheu o campo nome")
    }else {
        area.innerHTML = "Obrigado pela sua presença, " + nome + '!!!!!'+ ' '       
        
        let botaoSair = document.createElement("button")
        
        botaoSair.innerText = "Sair da conta" 
        botaoSair.onclick = sair
        area.appendChild(botaoSair)
    }   
}

function sair() {
    alert("Até mais, obrigado !")
    area.innerHTML = "Você saiu ..."
}