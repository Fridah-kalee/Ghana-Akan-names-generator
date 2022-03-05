var maleNames=['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi',  'Kwame'];
var femaleNames=['Akosua', 'Adwoa', 'Abenaa', 'Akua',  'Yaa', 'Afua', 'Ama'];

function check(){
    var gender= document.getElementById('gender').value;
    var day= document.getElementById('day').value;
    var dd=parseInt(day)
    var month= document.getElementById('month').value;
    var mm=parseInt(month)
    var year= document.getElementById('year').value;
    var yy=parseInt(year.substr(2.4));
    var yy=parseInt(year.substr(0.2));

    var dayWeek=(parseInt(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7))
}