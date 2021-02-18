// Object Literal
const shoe = {
    name: 'Jordan 4 Sail'
}

console.log(shoe);

// Person Constructor (Change to Brand as Example)(1st Example)
  function Brand(shoe){
    this.shoe = 'Balenciaga'
  }

  const offwhite = new Brand();

  console.log(offwhite);

// Person Constructor (2nd Example)
 function Person(name, age, city, height){
this.name = name;
this.age = age;
this.city = city;
this.height = height;
 }

 const Jesse = new Person('Jesse', '23', 'Mexico', '180cm');
 const Walter = new Person('Walter', '52', 'Texas', '163cm');
 const Hank = new Person('Hank', '25', 'New Mexico', '165cm');

 console.log(jesse, walter, hank);

// Constructor and This. Keyword (Person Constructor)
function Person(name, DoB){
    this.name = name;
    this.birthday = new Date(DoB);
    this.calculateAge = function(){
const diff = Date.now() - this.birthday.getTime();
const ageDate = new Date(diff);
return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const white = new Person('White', '3-24-1997');
const Hank = new Person('Hank', '5-25-00');
console.log(white.calculateAge());
console.log(hank.calculateAge());

 

