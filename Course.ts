import { Student } from "./Student.js";
import { Teacher } from "./Teacher.js";

export class Course {
    private courseTitle: string;
    private teacher: Teacher;
    private students: Student[] = [];
    private courseFee: number;

    constructor(courseTitle?: string, courseFee?: number) {
        if(courseTitle) {
            this.courseTitle = courseTitle;
        } else {
            this.courseTitle = "";
        }
        if(courseFee){
            this.courseFee = courseFee;
        }else{
            this.courseFee = 0;
        }
        this.teacher = new Teacher();
        this.students = [];
    }

    getCourseTitle(): string {
        return this.courseTitle;
    }

    getCourseTeacher(): Teacher {
        return this.teacher;
    }

    getStudentList(): Student[] {
        return this.students;
    }

    getStudent(student: string): boolean|Student {
        let std: boolean|Student = false;
        for(let i=0; i<this.students.length; i++) {
            if(this.students[i].checkName(student)){
                std = this.students[i];
                return std;
            }
        }
        return std;
    }

    getCourseFee(): number {
        return this.courseFee;
    }

    setTeacher(teacher: Teacher): void{
        this.teacher = teacher;
        this.teacher.setCourse(this.courseTitle);
    }

    setCourseTitle(courseTitle: string):void {
        this.courseTitle = courseTitle;
    }

    setCourseFee(courseFee: number):void {
        this.courseFee = courseFee;
    }

    addStudent(student: Student) {
        if(!this.getStudent(student.getName())){
            this.students.push(student);
            student.setCourseEntitle(this.courseTitle, true);
        }else{
            console.log("Student already enroled!!!");
        }
    }

    replaceTeacher(teacher: Teacher) {
        this.teacher = teacher
    }

    removeStudent(student: Student) {
        let indexNo = this.students.indexOf(student);
        this.students.splice(indexNo, 1);
    }

    replaceStudent(student1: Student, student2: Student) {
        let indexNo = this.students.indexOf(student1);
        this.students.splice(indexNo, 1, student2);
    }

    toString(): string {
        return `Course Title: ${this.courseTitle}, 
        Course Fee: ${this.courseFee}, 
        Teacher's Information is: ${this.teacher.toString()} 
        Total Students enrolled: ${this.students.length}.\n`;
    }
}