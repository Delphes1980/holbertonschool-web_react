interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const studentsList: Student[] = [];
const student1: Student = {
	firstName: 'John',
	lastName: 'Doe',
	age: 20,
	location: 'New York',
};

const student2: Student = {
	firstName: 'Jane',
	lastName: 'Doe',
	age: 22,
	location: 'Paris'
};

studentsList.push(student1, student2);

const table = document.createElement('table');
const headerRow = document.createElement('tr');
const headers: string[] = ['First Name', 'Location'];

headers.forEach((header: string) => {
	const th = document.createElement('th');
	th.textContent = header;
	headerRow.appendChild(th);
});
table.appendChild(headerRow);

studentsList.forEach((student: Student) => {
	const row = document.createElement('tr');
	const firstNameCell = document.createElement('td');
	const locationCell = document.createElement('td');
	
	firstNameCell.textContent = student.firstName;
	locationCell.textContent = student.location;
	
	row.appendChild(firstNameCell);
	row.appendChild(locationCell);
	table.appendChild(row);
});

document.body.appendChild(table);
