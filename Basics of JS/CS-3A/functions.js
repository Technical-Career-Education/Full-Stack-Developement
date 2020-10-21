let student = {
    name: 'Subrmanya',
    mark1: 50,
    mark2: 40,
    calculate1: () => {
        let mark1 = 65
        console.log(this.mark1);
    },
    calculate2 () {
        console.log(this.mark1);
    }
}

let student = {
    show(mark) {
        console.log(mark);
    }
}

student.calculate1();
student.calculate2();

student.show(85);
