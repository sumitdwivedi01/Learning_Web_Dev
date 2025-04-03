document.title = "Question 3";
class Complex{
    constructor(real , imag){
        this.real = real;
        this.imag = imag;
        console.log(`Your Complex Number is : ${real} + ${imag}i`);
    }
    add(other){
        return new Complex(this.real + other.real , this.imag + other.imag);
    }
    print_result(){
        console.log(`Your Complex Number is : ${this.real} + ${this.imag}i`);
    }
    get real_value(){
        return this.real ;
    }
    set real_value(value ){
        this.real = value;
        
    }
    get imaginary_value(){
        return this.imag;
    }
    set imaginary_value(value ){
        this.imag = value;
    }
}
let c1= new Complex(3,-1);
console.log("The real part of Complex number is : "+c1.real_value);
c1.real_value=9;
console.log("The real part of Complex number is : "+c1.real_value);
console.log("The imaginary part of Complex nubmer is :"+c1.imaginary_value);
c1.imaginary_value=2;
console.log("The imaginary part of Complex nubmer is :"+c1.imaginary_value);
