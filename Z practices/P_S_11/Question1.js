class Complex{
    constructor(real , imag){
        this.real = real;
        this.imag = imag;
        console.log(`Your Complex Number is : ${real} + ${imag}i`);
    }
    print_result(){
        console.log(`Your Complex Number is : ${this.real} + ${this.imag}i`);
    }
    add(other){
        return new Complex(this.real + other.real , this.imag + other.imag);
    }
        
}

let c1 = new Complex(3 , 6);
let c2 = new Complex(7,1);
let c3 =c1.add(c2);
let c4= c3.add(c1);

// c1.print_result();