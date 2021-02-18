// ES6 Classes

class Person {
    constructor(firstName, middleInitial, lastName, Dob,){
this.firstName = firstName;
this.middleInitial = middleInitial;
this.lastName = lastName;
this.birthdate = new Date(Dob);
    }

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
   return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName){
        this.lastName = newLastName;
    }
   
    greeting(){
        return `This Man ${this.firstName} ${this.middleInitial} ${this.lastName} is being honored by the King himself`;
    }


    static addNumbers(m, n){
return m + n;
    }
}

const walter = new Person('White', 'M', 'Im', '9-22-95',);

walter.getsMarried('Walter');

console.log(walter);
console.log(Person.addNumbers(25,24));