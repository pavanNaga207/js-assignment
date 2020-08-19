var names= ["jhon", "Pavan", "Jayanth", "Vijay", "naraesh", "Japan", "trishal", "venkatesh"]

for (var i=0; i < names.length; i++){
	if(names[i].charAt(0) == 'j' || names[i].charAt(0) == 'J'){
		console.log("goodbye " + names[i]);
	}
	else{
		console.log("Hello " + names[i]);
	}
}