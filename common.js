//assign variables to the user input elements//
var GetNameReg = document.getElementById("NameReg");
var GetIDnumber = document.getElementById("IDnumber");
var GetCourse = document.getElementById("Course");
var GetORnumber = document.getElementById("ORnumber");
var GetYrSem = document.getElementById("YrSem");
var GetDeviceSpec = document.getElementById("DeviceSpec");
var GetDeviceMac = document.getElementById("DeviceMac");
var GetEmailReg = document.getElementById("EmailReg");
var RegGet = document.getElementById("Regbtn");

    
    function Login(){
        document.location.href="login.html";
    }
//Regbut gets the inputs value and displays them through the console//
    function Regbut(){
        var GNR = GetNameReg.value;
        var GID = GetIDnumber.value;
        var GC = GetCourse.value;
        var GOR = GetORnumber.value;
        var GYS = GetYrSem.value;
        var GDS = GetDeviceSpec.value;
        var GDM = GetDeviceMac.value;
        var GER = GetEmailReg.value;

        console.log(GNR);
        console.log(GID);
        console.log(GC);
        console.log(GOR);
        console.log(GYS);
        console.log(GDS);
        console.log(GDM);
        console.log(GER);
        
    };
//Same tactic as the getting of inputs from the registration and displays then through the console//
var emailget = document.getElementById("Email");
var passget = document.getElementById("Password");
var GetLogin = document.getElementById("Loginsub");

    function Register(){
        document.location.href="wifi student registration.html";
    }

    function Logbut(){
        var eg = emailget.value;
        var pg = passget.value;

        console.log(eg);
        console.log(pg);
        
    };

//Used for returning to registration page//
function Return(){
document.location.href="wifi student registration.html";
}



