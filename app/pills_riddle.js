'use strict';

var numPills = 12;
var poison = parseInt(1+Math.random()*numPills);
var poisonWeight = 0.1;
if(Math.random()>0.5){poisonWeight = -0.1};

var allPills=[];//array of all the Pill objects 

var playing = null;

var actionWindow = document.getElementById('actionWindow');
var pillsContainer = document.getElementById('pillsContainer');
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
	pillsContainer.innerHTML+='<div class="clearBoth"></div>';
}
addPills();

//Easy way to access each pill element by its html ID
var pillID = function(num){
	return document.getElementById('pill_'+num);
}

//Creates event listeners for a given pill (mouseent, mouseleave, mousedown, and mouseup)
var pillHoverOn = function(pillNum){
	pillID(pillNum).addEventListener('mouseenter',function() {
		//addClass(pillID(pillNum),'hovered');
	});
}
var pillHoverOff = function(pillNum){
	pillID(pillNum).addEventListener('mouseleave',function() {
		removeClass(pillID(pillNum),'hovered');
		allPills[pillNum].unchoose();
	});
}
var pillMouseDown = function(pillNum){
	pillID(pillNum).addEventListener('mousedown',function() {
		allPills[pillNum].choose();
	});
}
var pillMouseUp = function(pillNum){
	pillID(pillNum).addEventListener('mouseup',function() {
		allPills[pillNum].unchoose();
	});
}

var pillMouseMove = function(pillNum){
	pillID(pillNum).addEventListener('mousemove',function() {
		var x=event.movementX;
		var y=event.movementY;
		dragPill(pillNum,x,y);
	});
}

var dragPill = function(pillNum,mousex,mousey) {
	if(allPills[pillNum].chosen){
		var newx;
		var newy;
		newx = mousex + parseInt(pillID(pillNum).style.left,10)||0;
		newy = mousey + parseInt(pillID(pillNum).style.top,10)||0;
		pillID(pillNum).style.left=(newx) + 'px';
		pillID(pillNum).style.top=(newy) +'px';
	}
}


// creates the MouseUp and MouseDown event listeners for all pills
for(var i=1;i<numPills+1;i++){
	pillMouseDown(i);
	pillMouseUp(i);
	pillHoverOn(i);
	pillHoverOff(i);
	pillMouseMove(i);

}


// GLOBAL HELPER FUNCTIONS
function addClass(el, cls) {
	var classes = el.className.split(' ');
	classes.push(cls);
	el.className = classes.join(' ');
}

function removeClass(el, cls) {
	el.className = el.className.replace(cls, '');
}


