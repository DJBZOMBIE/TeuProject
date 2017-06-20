
start();


function start(){
    var buttomAdd = document.getElementById('save');
    buttomAdd.onclick = function(){
         saveLocalStorage(); 
         
    };
    var buttonGetData = document.getElementById('check');
    buttonGetData.onclick = function(){
        loadLocalStorage();
    }
}

function saveLocalStorage(){
    var inputCod = document.getElementById('codigo');
    var inputNome = document.getElementById('nome');
    var inputCpf = document.getElementById('cpf');
    var inputEmail = document.getElementById('email');

    localStorage.setItem('Codigo', inputCod.value);
    localStorage.setItem('Nome', inputNome.value);
    localStorage.setItem('Cpf', inputCpf.value);
    localStorage.setItem('Email', inputEmail.value);
    addParagrafo(inputCod, inputNome, inputCpf, inputEmail);
}

function addParagrafo(inputCod, inputNome, inputCpf, inputEmail){
    var newP = document.createElement('p');
  
    var lista = document.getElementById('adicionar');

    lista.appendChild(newP)
   

    var texto = document.createTextNode("Código: "+inputCod.value+"  "+"Nome: "+inputNome.value+"  "+"CPF: "+inputCpf.value+"E-Mail "+"  "+inputEmail.value);
    newP.appendChild(texto);
    loadLocalStorage();
}

function loadLocalStorage(){
    var cod = localStorage.getItem('Codigo');
    var nom = localStorage.getItem('Nome');
    var cc = localStorage.getItem('Cpf');
    var emm = localStorage.getItem('Email');
    
    var inputCod = document.getElementById('codigo');
    var inputNom = document.getElementById('nome');
    var inputCppF = document.getElementById('cpf');
    var inputEmmail = document.getElementById('email');
    
    inputCod.value = cod;
    inputNom.value = nom;
    inputCppF.value = cc;
    inputEmmail.value = emm;

    var newP = document.createElement('p');
    var lista = document.getElementById("checks");
    lista.appendChild(newP);

    var texto = document.createTextNode("Código: "+inputCod.value+"  "+"Nome: "+inputNom.value+"  "+"CPF: "+inputCppF.value+"E-Mail "+"  "+inputEmmail.value);
    newP.appendChild(texto);

}
