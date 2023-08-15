import { Student } from "./Student.js";
import { Teacher } from "./Teacher.js";
import { Course } from "./Course.js";

export class Accounts {
    private received: (string|number)[][] = [];
    private payments: (string|number)[][] = [];

    coustructor() {

    }

    feesReceived(student: Student, course: Course) {
        let res: (string|number)[] = [student.getRollNumber(), course.getCourseFee()];
        this.received.push(res);
        console.log(res);
    }

    paySalary(teacher: Teacher) {
        let res: (string|number)[] = [teacher.getName(), teacher.getPay()];
        this.payments.push(res);
        console.log(res);
    }

    getIncome(): number {
        let rec: number = 0;
        let pay: number = 0;
        for(let i =0; i<this.received.length; i++) {
            rec += +this.received[i][1];
        }
        console.log(`Total recipts: ${rec}`);

        for(let i =0; i<this.payments.length; i++) {
            pay += +this.payments[i][1];
        }
        console.log(`Total payments: ${pay}`);
        return (rec-pay);
    }
}