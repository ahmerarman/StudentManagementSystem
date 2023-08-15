export class Student {
    name;
    age;
    gender;
    rollNumber = "";
    courseEntitle = [];
    constructor(name, age, gender) {
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
    getRollNumber() {
        return this.rollNumber;
    }
    getFeesStatus() {
        return this.courseEntitle;
    }
    getCourseEntitle() {
        return this.courseEntitle;
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
    setRollNumber(rollNumber) {
        this.rollNumber = rollNumber;
    }
    setCourseFeesStatus(cour, feeStatus) {
        let course = [];
        for (let i = 0; i < this.courseEntitle.length; i++) {
            if (this.courseEntitle[i][0] === cour) {
                this.courseEntitle.splice(i, 1, course);
                this.courseEntitle[i][0] = cour;
                this.courseEntitle[i][1] = feeStatus;
                break;
            }
        }
    }
    setCourseEntitle(courseTitle, feesPaid) {
        let course = [];
        if (this.courseEntitle.length > 0) {
            this.courseEntitle.splice(1, 0, course);
            this.courseEntitle[1][0] = courseTitle;
            this.courseEntitle[1][1] = feesPaid;
        }
        else {
            this.courseEntitle.push(course);
            this.courseEntitle[0][0] = courseTitle;
            this.courseEntitle[0][1] = feesPaid;
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
    checkFeePaid(course) {
        let result = false;
        for (let i = 0; i < this.courseEntitle.length; i++) {
            if (this.courseEntitle[i][0] == course) {
                result = this.courseEntitle[i][1];
                break;
            }
            else {
                result = "Course not found.";
            }
        }
        return result;
    }
    toString() {
        if (this.name.length > 0) {
            return `Student Neme is ${this.name},
            ${this.gender == "Male" ? "he" : "she"} is a ${this.gender},
            ${this.gender == "Male" ? "he" : "she"} is ${this.age} year's old, and
            ${this.gender == "Male" ? "his" : "her"} roll number is ${this.rollNumber}.\n`;
        }
        else {
            return `Student Object not set`;
        }
    }
}
