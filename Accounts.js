export class Accounts {
    received = [];
    payments = [];
    coustructor() {
    }
    feesReceived(student, course) {
        let res = [student.getRollNumber(), course.getCourseFee()];
        this.received.push(res);
        console.log(res);
    }
    paySalary(teacher) {
        let res = [teacher.getName(), teacher.getPay()];
        this.payments.push(res);
        console.log(res);
    }
    getIncome() {
        let rec = 0;
        let pay = 0;
        for (let i = 0; i < this.received.length; i++) {
            rec += +this.received[i][1];
        }
        console.log(`Total recipts: ${rec}`);
        for (let i = 0; i < this.payments.length; i++) {
            pay += +this.payments[i][1];
        }
        console.log(`Total payments: ${pay}`);
        return (rec - pay);
    }
}
