var numPills = 12;
var poison = parseInt(1+Math.random()*numPills);
var poisonWeight = 0.1;
if(Math.random()>0.5){poisonWeight = -0.1};

var allPills=[];//array of all the Pill objects 

var actionWindow = document.getElementById('actionWindow');
var group1 = document.getElementById('group1');
var group2 = document.getElementById('group2');

//Create the pills in HTML
//using the Pill class defined in Pill_class.js
// allPills[0] is undefined, it starts from index 1
// so that the pill ID matches its index in allPills[]
var addPills = function() {
	for(var i=1;i<numPills+1;i++){
		allPills[i] = new Pill(i);
		allPills[i].create();
	}
	actionWindow.innerHTML+='<div class="blank"></div>';
}
addPills();

//Easy way to access each pill element by its html ID
var pillID = function(num){
	return document.getElementById('pill_'+num);
}

//event listeners
var pillEventListener = function(pillNum) {
	return pillID(pillNum).addEventListener('click', function() {
			allPills[pillNum].choose();
		});
}

//creates an event listener for each pill getting clicked on. 
for(var i=1;i<numPills+1;i++){
	pillEventListener(i);
}