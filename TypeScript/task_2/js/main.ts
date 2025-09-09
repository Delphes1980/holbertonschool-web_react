interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

// Class that implements the DirectorInterface (respects the structure of the interface)
class Director implements DirectorInterface {
	workFromHome(): string {
		return 'Working from home';
	}
	getCoffeeBreak(): string {
		return 'Getting a coffee break';
	}
	workDirectorTasks(): string {
		return 'Getting to diector tasks';
	}
}

class Teacher implements TeacherInterface {
	workFromHome(): string {
		return 'Cannot work from home';
	}
	getCoffeeBreak(): string {
		return 'Cannot have a break';
	}
	workTeacherTasks(): string {
		return 'Getting to work';
	}
}

// Function that creates an employee based on their salary
function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500) {
		return new Teacher;
	} else {
		return new Director;
	}
}

// Type predicate to determine if the employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
	return employee instanceof Director;
}

// Function that executes work based on the employee type
function executeWork(employee: Director | Teacher): string {
	if (isDirector(employee)) {
		return employee.workDirectorTasks();
	} else {
		return employee.workTeacherTasks();
	}
}

type Subjects = 'Math' | 'History';

// Function that teaches a class based on the subject
function teachClass(todayClass: Subjects): string {
	if (todayClass === 'Math') {
		return 'Teaching Math';
	} else {
		return 'Teaching History';
	}
}
