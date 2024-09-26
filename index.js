//problem 1

function calculateTax(income, expense){
	if (income < 0 || expense < 0 || expense > income){
		return 'Invalid Input'
	}

	let savings = income - expense;
	let tax = savings * 0.20;

	return tax;
}

console.log(calculateTax(10000, 3000 ));
console.log(calculateTax(34000, 1753 ));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000 ));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));


//problem 2
console.log('problem 2---->');

function sendNotification(email) {
	
	if(email.split('').indexOf('@') === -1){
		return 'Invalid Email'
	}
	
	// if(email.split('').includes('@') === false){
	// 	return 'Invalid Email'
	// }

	let emailArr = email.split('@');
	let notification = `${emailArr[0]} sent you an email from ${emailArr[1]}`;

	return notification;
}


console.log(sendNotification('zihad@gmail.com'));
console.log(sendNotification('farhan34@yahoo.com'));
console.log(sendNotification('nadim.naem5@outlook.com'));
console.log(sendNotification('fahim234.hotmail.com'));
console.log(sendNotification('sadia8icloud.com'));
