/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
	export interface Teacher {
	experienceTeachingC?: number;
	}

	class Cpp extends Subjects.Subject {
		getRequirements(): string {
			return 'Here is the list of requirements for Cpp';
		}
		getAvailableTeacher(): string {
			if (!this.teacher.experienceTeachingC || this.teacher.experienceTeachingC === 0) {
				return 'No available teacher';
			} else {
				return 'Available Teacher: ' + this.teacher.firstName;
			}
		}
	}
}