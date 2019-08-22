// CODE here for your Lambda Classes

class Person {
    constructor(PersonObj) {
        this.name = personObj.name;
        this.age = personObj.age;
        this.location = personObj.location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${location}`
    }
}

let samuel = new Person({
    name: 'samuel',
    age: 20,
    location: 'Maryland',

})

let rory = new Person({
    name: 'binjo',
    age: 30,
    location: 'cowrywise',

})



class Instructor extends Person {
    constructor(PersonObj, InstructorObj) {
        super(PersonObj);

        this.specialty = InstructorObj.specialty;
        this.favLanguage = InstructorObj.favLanguage;
        this.catchphrase = InstructorObj.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject} `
    }


    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});


const duro = new Instructor({
    name: 'duro',
    location: 'Lagos',
    age: 30,
    favLanguage: 'PHP',
    specialty: 'Back-end',
    catchPhrase: `Which kain life`
});

class student extends Person {
    constructor(PersonObj, studentObj) {
        super(PersonObj)
        this.previousBackground = studentObj.previousBackground;
        this.className = studentObj.className;
        this.favSubjects = studentObj.favSubjects
    }
    listsSubjects() {
        return student.favSubjects;
    };

    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}`
    }


    sprintChallenge() {
        `${student.name} has begun sprint chaallenge on ${subject}`
    }
}


