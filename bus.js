
var prompt = require("prompt");

var Bus = function (addedStudents) {

	thisStudent = this;
	thisStudent.studentsOnTheBus = addedStudents;
	thisStudent.driverName = "";
	thisStudent.color = "";
	thisStudent.gas = 0;
	
	// This function would be redundant as the prompts are gathered
	// in main.js

	// this.studentEntersBus = function() {
	// 	for (i = 0;i<addedStudents.length;i++) {

	// 		this.studentsOnTheBus.push(addedStudents[i]);
	// 	}
	// }
	this.busChatter = function() {

		for (i=0;i<thisStudent.studentsOnTheBus.length;i++) {
			if (thisStudent.studentsOnTheBus[i].canStudentHaveFun() == "yes") {
				console.log("Student: "+ thisStudent.studentsOnTheBus[i].name+"'s catchphrase is "+this.studentsOnTheBus[i].catchPhrase);
			}
		}
	}

	//Function to remove students

	this.removeStudent = function() {
		console.log("Enter name of student you want to remove:");
		prompt.get(["name"], function (err,result) {

			for (i = 0;i < thisStudent.studentsOnTheBus.length;i++) {

					if (thisStudent.studentsOnTheBus[i].name == result.name) {
						indexToDelete = i;
						thisStudent.studentsOnTheBus.splice(indexToDelete , 1);
			console.log(thisStudent.studentsOnTheBus);


					}



				} //end of for loop	

			console.log("Modified array with student removed if request existed in array "+ thisStudent.studentsOnTheBus);

		});

	 };

}

module.exports = Bus;