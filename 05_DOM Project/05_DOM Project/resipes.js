//Add button
var selectDiv = document.querySelector('.nav-center  div:nth-child(3)');
var newButton = document.createElement('button');
newButton.className = "btn";
newButton.textContent = 'Pro subscription';
newButton.style.border ='none'
selectDiv.appendChild(newButton);


//Recipes sec adding one more

var newaTag = document.createElement('a');
newaTag.href = '#';
newaTag.textContent = 'Chinese (7)';
var tagContainer = document.querySelector('.tags-container');
tagContainer.querySelector('div').appendChild(newaTag);


// Footer change

var newfooter = document.querySelector('footer.page-footer a[href="#"]');
if(newfooter){
    newfooter.textContent = "Prity"

}


