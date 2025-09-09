/// <reference path="Teacher.ts" />
/// <reference path="Cpp.ts" />

namespace Subjects {
	export interface Teacher {
		experienceTeachingReact?: number;
	}

	class React extends Subjects.Subject {
		getRequirements(): string {
			return 'Here is the list of requirements for React';
		}
		getAvailableTeahcer(): string {
			if (!this.teacher.experienceTeachingReact || this.teacher.experienceTeachingReact === 0) {
				return 'No available teacher';
		} else {
			return 'Available teacher: ' + this.teacher.firstName;
		}
		}
	}
}
