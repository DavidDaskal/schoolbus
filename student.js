var Student = function (name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase) {

	this.name = name,
	this.gender = gender,
	this.grade = grade,
	this.GPA = GPA,
	this.detentions = detentions,
	this.sleepingInClass = sleepingInClass,
	this.catchPhrase = catchPhrase,
	this.canStudentHaveFun = function () {
		if ((detentions < 10) && (GPA > 2)) {
			// console.log("students can have fun");
			return "yes";
		}
		 else {
		 	return "no";
		 }
	  }
}
	


module.exports = Student;
	