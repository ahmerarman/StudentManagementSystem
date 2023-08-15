import { Teacher } from "./Teacher.js";
export class Course {
    courseTitle;
    teacher;
    students = [];
    courseFee;
    constructor(courseTitle, courseFee) {
        if (courseTitle) {
            this.courseTitle = courseTitle;
        }
        else {
            this.courseTitle = "";
        }
        if (courseFee) {
            this.courseFee = courseFee;
        }
        else {
            this.courseFee = 0;
        }
        this.teacher = new Teacher();
        this.students = [];
    }
    getCourseTitle() {
        return this.courseTitle;
    }
    getCourseTeacher() {
        return this.teacher;
    }
    getStudentList() {
        return this.students;
    }
    getStudent(student) {
        let std = false;
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].checkName(student)) {
                std = this.students[i];
                return std;
            }
        }
        return std;
    }
    getCourseFee() {
        return this.courseFee;
    }
    setTeacher(teacher) {
        this.teacher = teacher;
        this.teacher.setCourse(this.courseTitle);
    }
    setCourseTitle(courseTitle) {
        this.courseTitle = courseTitle;
    }
    setCourseFee(courseFee) {
        this.courseFee = courseFee;
    }
    addStudent(student) {
        if (!this.getStudent(student.getName())) {
            this.students.push(student);
            student.setCourseEntitle(this.courseTitle, true);
        }
        else {
            console.log("Student already enroled!!!");
        }
    }
    replaceTeacher(teacher) {
        this.teacher = teacher;
    }
    removeStudent(student) {
        let indexNo = this.students.indexOf(student);
        this.students.splice(indexNo, 1);
    }
    replaceStudent(student1, student2) {
        let indexNo = this.students.indexOf(student1);
        this.students.splice(indexNo, 1, student2);
    }
    toString() {
        return `Course Title: ${this.courseTitle}, 
        Course Fee: ${this.courseFee}, 
        Teacher's Information is: ${this.teacher.toString()} 
        Total Students enrolled: ${this.students.length}.\n`;
    }
}
