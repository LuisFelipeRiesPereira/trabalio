const idTabela = "tuamaedequatro"

function criarTabela() {
    
    let tableDiv = document.getElementById("tabelaDinamica")
    let table = document.createElement("TABLE")
    let tableBody = document.createElement("TBODY")
    tableBody.setAttribute("id", idTabela)

    table.appendChild(tableBody)    
    tableDiv.appendChild(table)

    const titulos = ["nome:", "altura:", "peso:", "imc:"]
    adicionarLinha(titulos)
}

function adicionarLinha(vetor){
    let tableRowDados = document.createElement("TR")

    vetor.forEach((dado, index) => {
        let tableDataDado = document.createElement("TD")
        tableDataDado.appendChild(document.createTextNode(dado))
        tableRowDados.appendChild(tableDataDado)
    })
  
    tableBody = document.getElementById(idTabela)
    tableBody.appendChild(tableRowDados)
    
}
 
function addRegistro(){
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    
    let dados = [
        document.getElementById("nome").value,
        peso,
        altura,
        calculoIMC(peso, altura)
    ]

    adicionarLinha(dados)
}

function registrar(){
    let tableDiv = document.getElementById("tabelaDinamica")
    
    if(tableDiv.childNodes.length === 0){
        criarTabela()
        addRegistro()
    }else{
        addRegistro()
    }
}

function calculoIMC(peso, altura){
    let calcularimc =  peso / (altura*altura)
    return calcularimc
}

// let div = document.createElement("div")
// let p = document.createElement("p")
// let text = document.createTextNode("NOME")
// let text2 = document.createTextNode("NOME2")
// let body = document.querySelector("body")
// let table = document.createElement("table")
// let tr = document.createElement("tr")
// let th = document.createElement("th")
// let thead = document.createElement("thead");
// let tbody = document.createElement("tbody");

// table.appendChild(thead);
// thead.appendChild(tr)
// tr.appendChild(th)
// th.appendChild(text)
// table.appendChild(tbody);
// tbody.appendChild(tr)
// tr.appendChild(th)
// th.appendChild(text)




// body.append(table)