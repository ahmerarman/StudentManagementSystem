import { Person } from "./Person.js";

export class Teacher implements Person {
    private name: string;
    private age: number;
    private gender: "Male" | "Female";
    private pay: number;
    private courses: string[] = [];

    constructor(name?: string, age?: number, gender?: "Male" | "Female", pay?: number){
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
        if(pay){
            this.pay = pay;
        } else {
            this.pay = 0;
        }
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    getGender(): "Male" | "Female" {
        return this.gender;
    }

    getCourses(): string[] {
        return this.courses;
    }

    getPay(): number {
        return this.pay;
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

    setPay(pay: number) {
        this.pay = pay;
    }

    setCourse(course: string) {
        if(!this.checkCourse(course)) {
            this.courses.push(course);
        }
    }

    setMultipleCourses(course: string[]) {
        let cour: string = "";
        for(let i=0; i<=course.length; i++) {
            this.setCourse(course[i]);
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

    checkCourse(course: string): boolean {
        let result = false;
        for(let i=0; i<this.courses.length; i++) {
            result = (this.courses[i]===course);
        }
        return result;
    }

    toString(): string {
        if(this.name.length>0){
            return `Teacher Neme is ${this.name},
             ${this.gender=="Male"? "he": "she"} is a ${this.gender},
             ${this.gender=="Male"? "he": "she"} is ${this.age} year's old,
             ${this.gender=="Male"? "his": "her"} pay is ${this.pay}.\n`;
        } else {
            return `Teacher Object not set`;
        }
    }
}