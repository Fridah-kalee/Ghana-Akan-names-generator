var maleNames = [ 'Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi',  'Kwame' ];
var femaleNames = ['Akosua',  'Adwoa', 'Abenaa', 'Akua',  'Yaa', 'Afua', 'Ama'];

//if date and month entered is valid 
//if either of them is invalid
//alert to enter a valid one

function check(){
    var gender = document.getElementById("gender").value;
    var day = document.getElementById("day").value;
    var dd = parseInt(day);
    var month = document.getElementById("month").value;
    var mm = parseInt(month);
    var year = document.getElementById("year").value;
    var yy = parseInt(year.substr(2.4));
    var cc = parseInt(year.substr(0.2));

   var birthDay = parseInt(((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10))+dd))%7;

}

