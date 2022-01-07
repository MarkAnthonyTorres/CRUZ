var GetNameReg = document.getElementById("NameReg");
var GetIDnumber = document.getElementById("IDnumber");
var GetCourse = document.getElementById("Course");
var GetORnumber = document.getElementById("ORnumber");
var GetYrSem = document.getElementById("YrSem");
var GetDeviceSpec = document.getElementById("DeviceSpec");
var GetDeviceMac = document.getElementById("DeviceMac");
var GetEmailReg = document.getElementById("EmailReg");

    function Login(){
        document.location.href="login.html";
    };
    
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

    function enable(){
        var cbox = document.getElementById("cb");
        var rbtn = document.getElementById("registerbtn");
            if (cbox.checked){
                rbtn.removeAttribute("disabled");
            };
    };
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

    function Return(){
        document.location.href="wifi student registration.html";
    }





