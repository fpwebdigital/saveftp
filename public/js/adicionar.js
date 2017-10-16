var usersList = document.getElementById('usersList');
var nomeInput = document.getElementById('nomeInput');
var sobrenomeInput = document.getElementById('sobrenomeInput');
var btnAdd = document.getElementById('btnAdd');


// Ao clicar no botão

btnAdd.addEventListener('click', function () {
   create(nomeInput.value, sobrenomeInput.value);
});

    function create(nome, sobrenome) {

        var data = {
            nome: nome,
            sobrenome: sobrenome
        };

        return firebase.database().ref().child('clientes').push(data);

    }

// Mostrar Usuários

firebase.database().ref('clientes').on('value', function (snapshot) {

   usersList.innerHTML = '';

    snapshot.forEach(function (item) {
       var li = document.createElement('li');
       li.appendChild(document.createTextNode(item.val().nome + ': ' + item.val().sobrenome));
       usersList.appendChild(li);

   });

});

