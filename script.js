
//////////--------------- ARROW FUNCTION --------------------/////////////
/*
function printMyName(name) {
    console.log(name);
}
printMyName('Max');
*/


/* A shortcut
const printMyName= (name) => {
    console.log(name);
}
printMyName('Max');
*/

/* Another shortcut (This only valid for one argument, NOT MORE or NOT LESS)
const printMyName = name => {
    console.log(name);
}
printMyName('Max');
*/


/* If you had a function which receives no argument, you then need to pass an empty pair of parantheses
const printMyName = () => {
    console.log('Max');
}
printMyName();
*/


/* If you had a function which receives more than ONE arguments, you also need parantheses
const printMyName = (name, age) => {
    console.log(name, age)
}
printMyName('Max', 28);
*/


/* Another shortcut INSIDE BODY/ARROW
const multiply = (number) => {
    return number * 2;
}
console.log(multiply(2));
*/



// Another shortcut INSIDE BODY/ARROW
// If you only have RETURN like above (Where all you do in your function body is return),
// And no othercode, you can omit the curly braces, and write it in ONE LINE
/*
const multiply = (number) => number * 2;

console.log(multiply(2));
*/











//////////--------------- CLASSES --------------------/////////////
/*
class Human {
    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super();
        this.name = 'Max';
        this.gender = "female"; // This is not correct, but just show that this works.
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();
*/












//////////--------------- CLASSES, PROPERTIES & METHODS --------------------/////////////
// You cant actually run this, you have to transpile it into ES6
/*
class Human {
    gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
        name = 'Max';
        gender = "female"; // This is not correct, but just show that this works.

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();
*/







//////////--------------- SPREAD AND REST OPERATORS --------------------/////////////

/*
// SPREAD
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4];

console.log(newNumbers);


// Example for the object (SPREAD)
const person = {
    name : 'Max'
};

const newPerson = {
    ...person,
    age: 28
};

console.log(newPerson);
*/


/*
const filter = (...args) => {
    return args.filter(el=> el === 1);
}

console.log(filter(1, 2, 3));
*/








//////////--------------- DESTRUCTURING --------------------/////////////
/*
const numbers = [1, 2, 3];
// [num1,num2] = numbers;
[num1, ,num2] = numbers;

console.log(num1, num2);
*/











//////////--------------- REFERENCE & PRIMITIVE TYPES REFRESHER --------------------/////////////
/*
const person = {
    name: 'Max'
} ;

// const secondPerson = person; // this commented to avoid the reason explain in the next two lines code
const secondPerson = {
    ...person
};

person.name = 'Manu';

// This will be printed 'MANU' instead of 'MAX' eventhough we console.log secondPerson
// This because it just copied the pointer and points to the exact same object in memory as person does
console.log(secondPerson);
*/














//////////--------------- REFRESHING ARRAY FUNCTION --------------------/////////////

const numbers = [1, 2, 3];

const doubleNumArray = numbers.map((num) => {
    return num * 2;
});

console.log(numbers);

console.log(doubleNumArray);
