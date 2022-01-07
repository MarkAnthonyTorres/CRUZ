
var row = 1;
var GetNameReg = document.getElementById("NameReg");
var GetIDnumber = document.getElementById("IDnumber");
var GetCourse = document.getElementById("Course");
var GetORnumber = document.getElementById("ORnumber");
var GetYrSem = document.getElementById("YrSem");
var GetDeviceSpec = document.getElementById("DeviceSpec");
var GetDeviceMac = document.getElementById("DeviceMac");
var GetEmailReg = document.getElementById("EmailReg");
var RegGet = document.getElementById("Regbtn");
    
    window.onload=function(){
        var regbtn = document.getElementById("Regbtn");
        regbtn.addEventListener("click",registerbutton);
    }
    function Login(){
        document.location.href="login.html";
    }

    function registerbutton(){
        var GNR = GetNameReg.value;
        localStorage.setItem("passGNR",GNR);
        var GID = GetIDnumber.value;
        localStorage.setItem("passGID",GID);
        var GC = GetCourse.value;
        localStorage.setItem("passGC",GC);
        var GOR = GetORnumber.value;
        localStorage.setItem("passGOR",GOR);
        var GYS = GetYrSem.value;
        localStorage.setItem("passGYS",GYS);
        var GDS = GetDeviceSpec.value;
        localStorage.setItem("passGDS",GDS);
        var GDM = GetDeviceMac.value;
        localStorage.setItem("passGDM",GDM);
        var GER = GetEmailReg.value;
        localStorage.setItem("passGER",GER);

        

        console.log(GNR);
        console.log(GID);
        console.log(GC);
        console.log(GOR);
        console.log(GYS);
        console.log(GDS);
        console.log(GDM);
        console.log(GER);

        var Registerlist = document.getElementById("Reglist");
        var newrow = Registerlist.insertRow(row);
        var cell1 = newrow.insertCell(0);
        var cell2 = newrow.insertCell(1);
        var cell3 = newrow.insertCell(2);
        var cell4 = newrow.insertCell(3);
        var cell5 = newrow.insertCell(4);
        var cell6 = newrow.insertCell(5);
        var cell7 = newrow.insertCell(6);
        var cell8 = newrow.insertCell(7);
        

        cell1.innerHTML = localStorage.getItem("passGNR");
        cell2.innerHTML = localStorage.getItem("passGID");
        cell3.innerHTML = localStorage.getItem("passGC");
        cell4.innerHTML = localStorage.getItem("passGOR");
        cell5.innerHTML = localStorage.getItem("passGYS");
        cell6.innerHTML = localStorage.getItem("passGDS");
        cell7.innerHTML = localStorage.getItem("passGDM");
        cell8.innerHTML = localStorage.getItem("passGER");

        row++;
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

