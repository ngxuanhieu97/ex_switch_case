function convert(){
    var DAY = + document.getElementById('day').value;
switch(DAY){
    case 3:
    case 5:
    case 1:
    case 7:
    case 8:
    case 10:
    case 12:
        document.getElementById('result').innerHTML = "Tháng " + DAY +" có 31 ngày";
        break;
    case 2:
        document.getElementById('result').innerHTML = "Tháng " + DAY + " có 28 hoặc 29 ngày";
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        document.getElementById('result').innerHTML = "Tháng " + DAY +" có 30 ngày"; 
        break;
    default: document.getElementById('result').innerHTML = "Không biết";
        break;
    }
}
function converts(){
    var DAYS = + document.getElementById('days').value;
switch(DAYS){
    case 3:
    case 5:
    case 1:
    case 7:
    case 8:
    case 10:
    case 12:
        document.getElementById('results').innerHTML = "Tháng " + DAYS +" có 31 ngày";
        break;
    case 2:
        document.getElementById('results').innerHTML = "Tháng " + DAYS + " có 28 hoặc 29 ngày";
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        document.getElementById('results').innerHTML = "Tháng " + DAYS +" có 30 ngày"; 
        break;
    default: document.getElementById('results').innerHTML = "Không biết";
        break;
    }
}