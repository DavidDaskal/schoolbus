// Function to add new student

 var addStudent = require("./student.js");
var addBus = require("./bus.js");
var prompt = require("prompt");
prompt.start();
 students = [];
var initiate = {

	studentCount: 0,
	
	getInput: function() { 

		prompt.get(['name','gender','grade','GPA','detentions','sleepingInClass','catchPhrase'], function (err, result) {
		name = result.name;
		gender = result.gender;
		grade = result.grade;
		GPA = result.GPA;
		detentions = result.detentions;
		sleepingInClass = result.sleepingInClass;
		catchPhrase = result.catchPhrase;
		newStudent = new addStudent(name,gender,grade,GPA,detentions,sleepingInClass,catchPhrase); 
		
		students.push(newStudent);
		
		initiate.studentCount++;
		if (initiate.studentCount <1) {  //Makes user enter 5 students
 			
 			initiate.getInput();
		 }
		else {

			newBus = new addBus(students);
			
			newBus.busChatter();

			newBus.removeStudent();
		  }


		});

	
	}
};

initiate.getInput();



