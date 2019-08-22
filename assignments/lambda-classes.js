// CODE here for your Lambda Classes

class Person {
    constructor(PersonObj) {
        this.name = PersonObj.name;
        this.age = PersonObj.age;
        this.location = PersonObj.location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${location}`
    }
}

let samuel = new Person({
    name: 'samuel',
    age: 20,
    location: 'Maryland',

});

let rory = new Person({
    name: 'rory',
    age: 30,
    location: 'cowrywise',

})



class Instructor extends Person {
    constructor(InstructorObj) {
        super(InstructorObj);
        this.specialty = InstructorObj.specialty;
        this.favLanguage = InstructorObj.favLanguage;
        this.catchphrase = InstructorObj.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject} `
    }


    grade(Student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}


let fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});


let duro = new Instructor({
    name: 'duro',
    location: 'Lagos',
    age: 30,
    favLanguage: 'PHP',
    specialty: 'Back-end',
    catchPhrase: `Which kain life`
});

class Student extends Person {
    constructor(studentObj) {
        super(studentObj)
        this.previousBackground = studentObj.previousBackground;
        this.className = studentObj.className;
        this.favSubjects = studentObj.favSubjects
    }
    listsSubjects() {
        return Student.favSubjects;
    };

    PRAssignment(subject) {
        return `${Student.name} has submitted a PR for ${subject}`
    }


    sprintChallenge() {
        `${Student.name} has begun sprint chaallenge on ${subject}`
    }
}

let seun = new Student({
    name: 'seun',
    location: 'abuja',
    age: 21,
    className: 'Webeu3',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
})

let feranmi = new Student({
    name: 'feranmi',
    location: 'Ikeja',
    age: 40,
    className: 'Webeu3',
    favSubjects: ['Html', 'PHP', 'JavaScript'],
})



class ProjectManagers extends Instructor {
    constructor(ProjectManagers) {
        super(ProjectManagers)
        this.gradClassName = ProjectManagers.gradClassName;
        this.favInstructor = ProjectManagers.favInstructor;
    };

    standup(slackChannel) {
        `${name} announces to ${channel}, @channel standy times`

    };

    debugsCode(Student, subject) {
        return `${name} debugs ${student.name} 's code on ${subject}`
    }
}

let Aaron = new ProjectManagers({
    name: 'Aaron',
    location: 'California',
    age: 33,
    favLanguage: 'Python',
    specialty: 'Redux',
    catchPhrase: 'WooWoo',
    gradClassName: 'CS1',
    favInstructor: 'Sean',

})

let Jussie = new ProjectManagers({

    name: 'Jussie',
    location: 'Texas',
    age: 30,
    favLanguage: 'Java',
    specialty: 'Redux',
    catchPhrase: 'WooWoo',
    gradClassName: 'CS1',
    favInstructor: 'Gabe',
})