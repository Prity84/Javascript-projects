//  first task

 // Select the header image using querySelector since class is defined so .logo
 var headerImg = document.querySelector('header .logo');

 // Change the src attribute of the header image
 headerImg.src = "./assets/ineuron-logo.png"; 
 headerImg.style.width = "500px";


//  2nd task 
var ChangeText = document.querySelector('.app_price span');
ChangeText.innerHTML = '$10';


//3rd task
var AddnewFooter = document.querySelector('.footer_social');

var creatnewDiv = document.createElement('div');
creatnewDiv.classList.add('footer_social_ico');

var creatnewI = document.createElement('i')
creatnewI.classList.add('fa-brands', 'fa-linkedin');

creatnewDiv.appendChild(creatnewI);

AddnewFooter.appendChild(creatnewDiv);