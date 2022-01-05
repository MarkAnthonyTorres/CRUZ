var Reglist = []

let GetNameReg = document.querySelector("#NameReg");
let GetIDnumber = document.querySelector("#IDnumber");
let GetCourse = document.querySelector("#Course");
let GetORnumber = document.querySelector("#ORnumber");
let GetYrSem = document.querySelector("#YrSem");
let GetDeviceSpec = document.querySelector("#DeviceSpec");
let GetDeviceMac = document.querySelector("#DeviceMac");
let GetEmailReg = document.querySelector("#EmailReg");
let RegGet = document.querySelector("#Regbtn");

    
    function Login(){
        document.location.href="login.html";
    }

    RegGet.addEventListener('click',() =>{
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
    });



