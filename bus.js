
var prompt = require("prompt");

var Bus = function (addedStudents) {

	this.studentsOnTheBus = addedStudents;
	this.driverName = "";
	this.color = "";
	this.gas = 0;
	
	// This function would be redundant as the prompts are gathered
	// in main.js

	// this.studentEntersBus = function() {
	// 	for (i = 0;i<addedStudents.length;i++) {

	// 		this.studentsOnTheBus.push(addedStudents[i]);
	// 	}
	// }
	this.busChatter = function() {

		for (i=0;i<this.studentsOnTheBus.length;i++) {
			if (this.studentsOnTheBus[i].canStudentHaveFun() == "yes") {
				console.log("Student: "+ this.studentsOnTheBus[i].name+"'s catchphrase is "+this.studentsOnTheBus[i].catchPhrase);
			}
		}
	}

	//Function to remove students

	this.removeStudent = function() {
		console.log("Enter name of student you want to remove:");
		prompt.get(["name"], function (err,result) {
			
			for (i = 0;i < addedStudents.length;i++) {

					if (addedStudents[i].name == result.name) {
						indexToDelete = i;
						addedStudents.splice(indexToDelete , 1);
			console.log(addedStudents);


					}

					else {

						console.log("Student not on bus");
					}

				}	

		});

	 };

}

module.exports = Bus;