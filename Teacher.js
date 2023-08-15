export class Teacher {
    name;
    age;
    gender;
    pay;
    courses = [];
    constructor(name, age, gender, pay) {
        if (name) {
            this.name = name;
        }
        else {
            this.name = "";
        }
        if (age) {
            this.age = age;
        }
        else {
            this.age = 0;
        }
        if (gender) {
            this.gender = gender;
        }
        else {
            this.gender = "Male";
        }
        if (pay) {
            this.pay = pay;
        }
        else {
            this.pay = 0;
        }
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getGender() {
        return this.gender;
    }
    getCourses() {
        return this.courses;
    }
    getPay() {
        return this.pay;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
    setGender(gender) {
        this.gender = gender;
    }
    setPay(pay) {
        this.pay = pay;
    }
    setCourse(course) {
        if (!this.checkCourse(course)) {
            this.courses.push(course);
        }
    }
    setMultipleCourses(course) {
        let cour = "";
        for (let i = 0; i <= course.length; i++) {
            this.setCourse(course[i]);
        }
    }
    checkName(name) {
        return this.name === name;
    }
    checkAge(age) {
        return this.age === age;
    }
    checkGender(gender) {
        return this.gender === gender;
    }
    checkCourse(course) {
        let result = false;
        for (let i = 0; i < this.courses.length; i++) {
            result = (this.courses[i] === course);
        }
        return result;
    }
    toString() {
        if (this.name.length > 0) {
            return `Teacher Neme is ${this.name},
             ${this.gender == "Male" ? "he" : "she"} is a ${this.gender},
             ${this.gender == "Male" ? "he" : "she"} is ${this.age} year's old,
             ${this.gender == "Male" ? "his" : "her"} pay is ${this.pay}.\n`;
        }
        else {
            return `Teacher Object not set`;
        }
    }
}
