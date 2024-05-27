/* Beginner Challenge */
const bookList = [
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ulysses", author: "James Joyce" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Moby Dick", author: "Herman Melville" },
];

/* Do all of these using proper ES6 syntax
Using the following array of objects, */
//(1) Write an arrow function that adds a new entry to bookList *
const addEntry = (newTitle, newAuthor) => bookList.push({ title: newTitle, author: newAuthor });
addEntry("My Book", "Tiffany Fu");
//(2) Write an arrow function that removes a specific book from the bookList
const removeEntry = (newTitle, newAuthor) => bookList.splice(bookList.findIndex(obj => obj == {title: newTitle, author: newAuthor}));
removeEntry("My Book", "Tiffany Fu");
//(3) Write an arrow function that lists out all the books or all the authors in the book list */
const listTitles = () => bookList.forEach((obj) => console.log(obj.title));
const listAuthors = () => bookList.forEach((obj) => console.log(obj.author));

/* Intermediate Challenge */

/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */
let state = (num) => num > 0 ? "positive" : "negative";
/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */
let day = "Monday";
switch (day)
{
  case "Monday":
    console.log("good luck");
    break;
  case "Tuesday":
    console.log("tueday is a great day");
    break;
  case "Wednesday":
    console.log("hump day");
    break;
  case "Thursday":
    console.log("one more day");
    break;
  case "Friday":
    console.log("party");
    break;
  case "Saturday":
    console.log("for the boys");
    break;
  case "Sunday":
    console.log("rest day");
    break;
  default:
    console.log("what day is that?");
}
/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */
function sumUp(num) {
  sum = 0;
  for (i = 1; i <= num; i++)
    sum += i;
  return sum;
}
/* Harder Challenge */

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
    me what I should wear accordingly */
let tempCheck = (degreeC) => {
  degreeF = (degreeC * 9 / 5) + 32;
  if (degreeF < 30 )
      console.log("Put on your Winter Coat.");
  else if (degreeF < 60)
      console.log("Sweather Weather by The Neighbourhood");
  else if (degreeF < 100)
      console.log("Shorts and a Tee Baby!");
  else
      console.log("DON'T GO OUTSIDE");
}
/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */
const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];
let truthCount = (array) => {
  let c = 0;
  array.forEach((element) => {
    if (element) c++;
  });
  return c;
};

/* (9) Using the map function and arrow syntax, return an array of object that contain a fullName field
  and an averageGrade field representing the letter grade that corresponds to their GPA */
const attendance = [
  { firstName: "Clay", lastName: "Tondreau", gpa: 4.0 },
  { firstName: "Tucker", lastName: "Wilson", gpa: 2.0 },
  { firstName: "Eliza", lastName: "Tobin", gpa: 3.7 },
  { firstName: "Sofia", lastName: "Ackerman", gpa: 1.1 },
  { firstName: "Thomas", lastName: "Beddow", gpa: 2.3 },
  { firstName: "Jackson", lastName: "Wolf", gpa: 4.0 },
  { firstName: "Jared", lastName: "Nguyen", gpa: 4.0 },
];

const convertAttendance = (student) => {
    let newStudent = {};
    newStudent.fullName = student.firstName + " " + student.lastName;
    if (student.gpa > 3)
        newStudent.grade = "A";
    else if (student.gpa > 2)
        newStudent.grade = "B";
    else if (student.gpa > 1)
        newStudent.grade = "C";
    else
        newStudent.grade = "F";
    return newStudent;
}

const newAttendance = attendance.map(convertAttendance);

/* Hardest Challenge (Don't do this without completing harder challenges) */

/* Write a function that solves the "every number eventually equals 4" puzzle. The output should be
    an array of the path you took to make it equal four
    ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
    For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

// assuming num < 1,000,000. Pattern holds with higher numbers but just requires more checks
// does not support leading zeros

const units = {
	1: "one",
	2: "two",
	3: "three",
	4: "four",
	5: "five",
	6: "six",
	7: "seven",
	8: "eight",
	9: "nine",
	10: "ten",
	11: "eleven",
	12: "twelve",
	13: "thirteen",
	14: "fourteen",
	15: "fifteen",
	16: "sixteen",
	17: "seventeen",
	18: "eighteen",
	19: "ninetten",
};
const tens = {
	20: "twenty",
	30: "thirty",
	40: "fourty",
	50: "fifty",
	60: "sixty",
	70: "seventy",
	80: "eighty",
	90: "ninty",
};

const numToString = (num) => {
	if (num <= 0 || num > 9999) return "Input out of bounds (1-9999)";
	let numString = "";
	if (num > 999) {
		const thousandDigit = Math.floor(num / 1000);
		numString += units[thousandDigit] + "thousand";
		num = num % 1000;
	}
	if (num > 99) {
		const hundredDigit = Math.floor(num / 100);
		numString += units[hundredDigit] + "hundred";
		num = num % 100;
	}
	if (num > 19) {
		const tensDigit = Math.floor(num / 10);
		numString += tens[tensDigit * 10];
		num = num % 10;
	}
	numString += units[num];
	return numString;
};

let fourPuzzle = (num) => {
  let returnArray = [num];
  while (returnArray[returnArray.length - 1] !== 4) {
    num = numToString(num).length;
    returnArray.push(num);
  }
  return returnArray;
}

console.log(fourPuzzle(11));