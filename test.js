// inheritance in JS
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}


// define sayBio method on the constructor prototype
Person.prototype.sayBio = function() {
    console.log(`Hello there! I'm a professional!`);
}

// An Employee inherits a person
function Employee(name, age, gender, profession) {
    Person.call(this, name, age, gender);

    this.profession = profession;
}

//const employee1 = new Employee("John", 20, male);//first instance of a 
                                //Employee
//employee1.sayBio();//sayBio is not a function since
    //its not defined in the employee constructor

Employee.prototype = Object.create(Person.prototype);
console.log(Employee.prototype.constructor);
Employee.prototype.constructor = Employee; //referencing our created Employee
const employee1 = new Employee("John", 20, "male", "Web Developer");
employee1.sayBio();
// but we want a more better method for sayBio for an employee
Employee.prototype.sayBio = function() {
    console.log("Greetings, I'm a dedicated employee!");
}
employee1.sayBio();