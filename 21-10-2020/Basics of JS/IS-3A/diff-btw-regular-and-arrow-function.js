const student = {
    name: 'Swasthik',
    usn: "4SF16CS175",
    displayname: function() { 
        console.log("inside regular");
        console.log(this.name);
        console.log(this.usn);
    },
    displayusn: () => {
        let name = "Subramanya"
        console.log("inside arrow");
        console.log(this.name);
        console.log(this.usn);
    }
}

student.displayname()
student.displayusn()