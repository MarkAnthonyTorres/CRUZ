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

    
    function Login(){
        document.location.href="login.html";
    }

    function Regbut(){
        var GNR = GetNameReg.value;
        var GID = GetIDnumber.value;
        var GC = GetCourse.value;
        var GOR = GetORnumber.value;
        var GYS = GetYrSem.value;
        var GDS = GetDeviceSpec.value;
        var GDM = GetDeviceMac.value;
        var GER = GetEmailReg.value;

        if(!GNR || !GID || !GC || !GOR || !GYS || !GDS || !GDM || !GER ){
            alert("Please fill the neccessary information");
            return;
        }

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
        

        cell1.innerHTML = GNR;
        cell2.innerHTML = GID;
        cell3.innerHTML = GC;
        cell4.innerHTML = GOR;
        cell5.innerHTML = GYS;
        cell6.innerHTML = GDS;
        cell7.innerHTML = GDM;
        cell8.innerHTML = GER;

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

