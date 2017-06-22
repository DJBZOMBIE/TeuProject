
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

    if(inputCod.value!='' && inputNome.value!='' && inputCpf.value!='' && inputEmail.value!=''){
        localStorage.setItem('Codigo', inputCod.value);
        localStorage.setItem('Nome', inputNome.value);
        localStorage.setItem('Cpf', inputCpf.value);
        localStorage.setItem('Email', inputEmail.value);
        addParagrafo(inputCod, inputNome, inputCpf, inputEmail);
    }else{
        alert('Erro: Preencha todos os campos!');
    }
}

function addParagrafo(inputCod, inputNome, inputCpf, inputEmail){
    var newP = document.createElement('p');
  
    var lista = document.getElementById('checks');

    lista.appendChild(newP)
   

    var texto = document.createTextNode("Código: "+inputCod.value+"  "+"Nome: "+inputNome.value+"  "+"CPF: "+inputCpf.value+" E-Mail: "+"  "+inputEmail.value);
    newP.appendChild(texto);
    loadLocalStorage();
    
}

function loadLocalStorage(){
    var cod = localStorage.getItem('Codigo');
    var nom = localStorage.getItem('Nome');
    var cc = localStorage.getItem('Cpf');
    var emm = localStorage.getItem('Email');

    if(cod!='' && nom!='' && cc!=''&& emm!=''){
        var tr = document.createElement('tr');
        var listTable = document.getElementById('tabela');
        var tdCod = document.createElement('td');
        var tdNome = document.createElement('td');
        var tdCpf = document.createElement('td');
        var tdEmail = document.createElement('td');
    
         listTable.appendChild(tr);

        var txCod = document.createTextNode(cod);
        var txNome = document.createTextNode(nom);
        var txCPF = document.createTextNode(cc);
        var txeMAIL = document.createTextNode(emm);

        tr.appendChild(tdCod);
        tr.appendChild(tdNome);
        tr.appendChild(tdCpf);
        tr.appendChild(tdEmail);

        tdCod.appendChild(txCod);
        tdNome.appendChild(txNome);
        tdCpf.appendChild(txCPF);
        tdEmail.appendChild(txeMAIL);
    }else{
        alert('Erro: Algum campo no banco deve estar vazio!');
    }
}
