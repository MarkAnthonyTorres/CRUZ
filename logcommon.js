var LAbtn = document.getElementById("Loginsub");
LAbtn.addEventListener("click",displayinputs);

var row = 1;

function displayinputs(){
    var GetE = document.getElementById("Email");
    var GetP = document.getElementById("Password");

    var display = document.getElementById("Loglist");

    var newrow = display.insertRow(row);

    var cell1 = newrow.insertCell(0);
    var cell2 = newrow.insertCell(1);
    

    cell1.innerHTML = GetE.value;
    cell2.innerHTML = GetP.value;

    console.log(GetE.value);
    console.log(GetP.value);

    row++;
}
