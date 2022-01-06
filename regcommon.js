var Reglist = []

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

        console.log(GNR);
        console.log(GID);
        console.log(GC);
        console.log(GOR);
        console.log(GYS);
        console.log(GDS);
        console.log(GDM);
        console.log(GER);
    };



