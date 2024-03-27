//Change the innerhtml of a selected div
var characterNameDiv = document.querySelector('.clash-card.archer div:nth-child(3)');
characterNameDiv.innerHTML = 'The Archer';


var characterNameDiv = document.querySelector('.clash-card.goblin div:nth-child(3)');
characterNameDiv.innerHTML = 'The Goblin';


//Change the backgroundColor of the selected class name

var barbarianUnitStatsDiv = document.querySelector('.clash-card__unit-stats.clash-card__unit-stats--barbarian.clearfix');
barbarianUnitStatsDiv.style.backgroundColor = '#F3B63A';


var archerUnitStatsDiv = document.querySelector('.clash-card__unit-stats.clash-card__unit-stats--archer.clearfix');
archerUnitStatsDiv.style.backgroundColor = '#E74292';


var GiantUnitStatsDiv = document.querySelector('.clash-card__unit-stats.clash-card__unit-stats--giant.clearfix');
GiantUnitStatsDiv.style.backgroundColor = '#eb7134';

var GoblinUnitStatsDiv = document.querySelector('.clash-card__unit-stats.clash-card__unit-stats--goblin.clearfix');
GoblinUnitStatsDiv.style.backgroundColor = '#5aa154';


var WizardUnitStatsDiv = document.querySelector('.clash-card__unit-stats.clash-card__unit-stats--wizard.clearfix');
WizardUnitStatsDiv.style.backgroundColor = '#3498DB';


//Change the text color of the selected class elm

var changeTextColor = document.querySelectorAll('.one-third');
changeTextColor.forEach(function(element){
    element.style.color = 'white';

});



//Now flexing or Griding all card into a single page

let wrapperFlex = document.querySelectorAll('.card');
wrapperFlex.forEach(function(element){
 element.style.display = 'flex';
});
