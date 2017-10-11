(function () {

    var config = {
        apiKey: "AIzaSyC3CZYb5arkyAchCmomm6lw1Sxol4__KLI",
        authDomain: "saveftp-ce9d7.firebaseapp.com",
        databaseURL: "https://saveftp-ce9d7.firebaseio.com",
        projectId: "saveftp-ce9d7",
        storageBucket: "saveftp-ce9d7.appspot.com",
        messagingSenderId: "355147122752"
    };
    firebase.initializeApp(config);


    // Pegar elementos da tela de login

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnEntrar = document.getElementById('btnEntrar');
    const btnCadastrar = document.getElementById('btnCadastrar');
    const btnSair = document.getElementById('btnSair');


    //Entrar


    btnEntrar.addEventListener('click', e => {

        const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    // Entrar
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));


    });


    btnCadastrar.addEventListener('click', e =>{

        //TODO: verificar se email é verdadeiro
        const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    // Entrar
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

});

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
        }
        else
            console.log('nao logado');

});



}());





