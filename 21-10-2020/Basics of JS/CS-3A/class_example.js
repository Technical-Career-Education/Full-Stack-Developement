class Student {
    constructor(){
        this.name = "Subramanya"
        this.mark = 50;
        this.roll = 10;
    }

    getInfo(){
        console.log(this.name);
    }

    greet(){
        console.log("Hello " + this.name);
    }
}

let obj = new Student();
obj.getInfo()
obj.greet()
