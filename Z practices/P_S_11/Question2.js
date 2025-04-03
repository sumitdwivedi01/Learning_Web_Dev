class Human {
  constructor(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;

    console.log(`Name =${name} , Age =${age} , Weight =${weight}`);
  }
  eats() {
    console.log(`I eat food`);
  }
}
class Student extends Human {
  constructor(name, age, weight, roll_no, section) {
    super(name, age, weight);
    this.roll_no = roll_no;
    this.section = section;
    console.log(`Roll no is : ${roll_no} and Section of class is : ${section}`);
  }
  eats() {
    super.eats(); //calls the parent class method
    console.log(`I eats 4 times +1 in college`);
  }
}

let student1 = new Student("Sumit", "19", "50kg", "230180101054", "C2");
student1.eats();
console.log(student1 instanceof Human);
