var RAbtn = document.getElementById("Registerbtn");
RAbtn.addEventListener("click",displayinputs);

var row = 1;
function displayinputs(){
    var GetNameReg = document.getElementById("NameReg");
    var GetIDnumber = document.getElementById("IDnumber");
    var GetCourse = document.getElementById("Course");
    var GetORnumber = document.getElementById("ORnumber");
    var GetYrSem = document.getElementById("YrSem");
    var GetDeviceSpec = document.getElementById("DeviceSpec");
    var GetDeviceMac = document.getElementById("DeviceMac");
    var GetEmailReg = document.getElementById("EmailReg");

    var display = document.getElementById("Reglist");

    var newrow = display.insertRow(row);

    var cell1 = newrow.insertCell(0);
    var cell2 = newrow.insertCell(1);
    var cell3 = newrow.insertCell(2);
    var cell4 = newrow.insertCell(3);
    var cell5 = newrow.insertCell(4);
    var cell6 = newrow.insertCell(5);
    var cell7 = newrow.insertCell(6);
    var cell8 = newrow.insertCell(7);

    cell1.innerHTML = GetNameReg.value;
    cell2.innerHTML = GetIDnumber.value;
    cell3.innerHTML = GetCourse.value;
    cell4.innerHTML = GetORnumber.value;
    cell5.innerHTML = GetYrSem.value;
    cell6.innerHTML = GetDeviceSpec.value;
    cell7.innerHTML = GetDeviceMac.value;
    cell8.innerHTML = GetEmailReg.value;

    console.log(GetNameReg.value);
    console.log(GetIDnumber.value);
    console.log(GetCourse.value);
    console.log(GetORnumber.value);
    console.log(GetYrSem.value);
    console.log(GetDeviceSpec.value);
    console.log(GetDeviceMac.value);
    console.log(GetEmailReg.value);


    row++;
}