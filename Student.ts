import { Person } from "./Person.js";

export class Student implements Person {
    private name: string;
    private age: number;
    private gender: "Male" | "Female";
    private rollNumber: string = "";
    private courseEntitle: (string|boolean)[][] = [];

    constructor(name?: string, age?: number, gender?: "Male" | "Female"){
        if(name) {
            this.name = name;
        }else{
            this.name = "";
        }
        if(age) {
            this.age = age;
        }else{
            this.age = 0;
        }
        if(gender){
            this.gender = gender;
        }else{
            this.gender = "Male";
        }
    }

    getName(): string {
        return this.name
    }

    getAge(): number {
        return this.age
    }

    getGender(): "Male" | "Female" {
        return this.gender;
    }

    getRollNumber(): string{
        return this.rollNumber;
    }

    getFeesStatus(): (string|boolean)[][] {
        return this.courseEntitle;
    }

    getCourseEntitle(): (string|boolean)[][] {
        return this.courseEntitle;
    }

    setName(name: string): void {
        this.name = name;
    }

    setAge(age: number): void {
        this.age = age;
    }

    setGender(gender: "Male" | "Female"): void {
        this.gender = gender;
    }

    setRollNumber(rollNumber: string): void {
        this.rollNumber = rollNumber;
    }

    setCourseFeesStatus(cour: string, feeStatus: boolean) {
        let course: (string|boolean)[] = [];
        for(let i=0; i<this.courseEntitle.length; i++){
            if(this.courseEntitle[i][0]===cour){
                this.courseEntitle.splice(i, 1, course);
                this.courseEntitle[i][0] = cour;
                this.courseEntitle[i][1] = feeStatus;
                break;
            }
        }
    }

    setCourseEntitle(courseTitle: string, feesPaid: boolean) {
        let course: (string|boolean)[] = [];
        if(this.courseEntitle.length>0){
            this.courseEntitle.splice(1, 0, course);
            this.courseEntitle[1][0] = courseTitle;
            this.courseEntitle[1][1] = feesPaid;
        }else{
            this.courseEntitle.push(course);
            this.courseEntitle[0][0] = courseTitle;
            this.courseEntitle[0][1] = feesPaid;
        }
    }

    checkName(name: string): boolean {
        return this.name === name;
    }

    checkAge(age: number): boolean {
        return this.age === age;
    }

    checkGender(gender: "Male" | "Female"): boolean {
        return this.gender === gender;
    }

    checkFeePaid(course: string): string|boolean {
        let result: string|boolean = false;
        for(let i=0; i<this.courseEntitle.length; i++) {
            if(this.courseEntitle[i][0] == course) {
                result = this.courseEntitle[i][1];
                break;
            }else{
                result = "Course not found.";
            }
        }
        return result;
    }

    toString(): string {
        if(this.name.length>0){
            return `Student Neme is ${this.name},
            ${this.gender=="Male"? "he": "she"} is a ${this.gender},
            ${this.gender=="Male"? "he": "she"} is ${this.age} year's old, and
            ${this.gender=="Male"? "his": "her"} roll number is ${this.rollNumber}.\n`;
        } else {
            return `Student Object not set`;
        }
    }
}