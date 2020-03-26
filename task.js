/*function checkAge(age) {
	return (age > 18) ? true : confirm('Do you have permission?');
}*/

function CheckAge(age) {
    return age > 18 || confirm('Do You have permission?');
}

function min(a) {
	if (a <= 1) {
		console.log('Невірно введена кількість чисел');
		return null;
	}
	else {
		min_number = prompt('1-е число', 0);
		let array = [];
		for (var i = 1; i < a; i++) {
			array[i] = prompt(i+1 + '-е число', 0);
			if (array[i] < min_number) {
				min_number = array[i];
			}
		}
		return min_number;
	}
}

var num = prompt('Кількість чисел', 0);
console.log(min(num));

var age = prompt('age', 0);
console.log(CheckAge(age));