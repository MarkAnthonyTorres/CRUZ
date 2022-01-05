let emailget = document.querySelector("#Email");
let passget = document.querySelector("#Password");
let GetLogin = document.querySelector("#Loginsub");

    function Register(){
        document.location.href="wifi student registration.html";
    }

    GetLogin.addEventListener('click',() =>{
        var eg = emailget.value;
        var pg = passget.value;

        console.log(eg);
        console.log(pg);
        
    });
