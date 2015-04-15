/*************************
 Pill Class
*************************/

var Pill = function(num) {
	this.num=num;
	this.isPoison = false;
	this.weight = 1;
	this.group = 0;
	this.chosen = false;
} 

//code for making a pill object. Also checks to see if it's the poison
Pill.prototype.create = function() {
	actionWindow.innerHTML+='<div class="pill" id="pill_'+this.num+'">'+this.num+'</div>';
	if (poison==this.num){
		this.isPoison=true;
		this.weight+=poisonWeight;
	}
};

//Choose a pill (to add to either group on the scale)
//returns the className of the pill
Pill.prototype.choose = function() {
	var pillClass = pillID(this.num).className;
	var selectedClassIndex = pillID(this.num).className.search('selected');

	if(selectedClassIndex<0){//if it doesn't have the class 'selected'	
		pillClass += ' selected';
		this.chosen = true;
	}
	else{
		pillClass = pillClass.replace(' selected','');
		this.chosen = false;
	}
	return pillID(this.num).className = pillClass;
}

