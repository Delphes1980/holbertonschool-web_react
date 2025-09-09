interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

// Directors Object inherits from Teacher Object
interface Directors extends Teacher {
	numberOfReports: number;
}

// Returns the first letter of the firstName and the full lastName
function printTeacher(firstName: string, lastName: string) {
	return `${firstName.charAt(0)}. ${lastName}`;
}

// Interface of the function printTeacher including the 2 parameters of the function
interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

// The class StudentClass is defined through an interface
interface StudentClassInterface {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
}

// The class constructor is defined through an interface
interface StudentClassConstructor {
	new (firstName: string, lastName: string): StudentClassInterface;
}

// Definition of the class StudentClass
class StudentClass {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return 'Currently working';
	}

	displayName(): string {
		return this.firstName;
	}
}