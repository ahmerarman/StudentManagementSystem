#!/usr/bin/env node
import inquirer from "inquirer";
import { Student } from "./Student.js";
import { Teacher } from "./Teacher.js";
import { Course } from "./Course.js";
import { Accounts } from "./Accounts.js";
let studentsList = [];
let coursesList = [];
let teachersList = [];
let accounts = new Accounts();
let answer1, answer2, answer3, answer4, answer5, addStd, editStd, editStd2;
let loop = true;
async function displayMainMenu() {
    answer1 = await inquirer.prompt([
        {
            type: "list",
            name: "mainMenu",
            choices: ['Student Information', 'Teacher Information', 'Course Information', 'Accounts Menu', 'Exit'],
            message: `Please select your choice: `
        }
    ]);
    switch (answer1.mainMenu) {
        case 'Student Information': {
            console.log("Student Information menu:");
            await startLoopStudentMenu();
            break;
        }
        case 'Teacher Information': {
            console.log("Teacher's Information menu:");
            await startLoopTeacherMenu();
            break;
        }
        case 'Course Information': {
            console.log("Course Information menu:");
            await startLoopCourseMenu();
            break;
        }
        case 'Accounts Menu': {
            console.log("Accounts menu:");
            await startLoopAccountsMenu();
            break;
        }
        default: {
            console.log("Exiting Program.");
            loop = false;
            break;
        }
    }
}
async function displayAccountsMenu() {
    answer5 = await inquirer.prompt([
        {
            type: "list",
            name: "acc",
            choices: ["Pay to Teacher", "Income Statement", "Main Menu", "Exit"],
            message: "Please select your option: "
        }
    ]);
    switch (answer5.acc) {
        case "Pay to Teacher": {
            console.log("Pay to teacher.");
            await displayPayTeacherMenu();
            break;
        }
        case "Income Statement": {
            console.log("Income Statement.");
            console.log("Net Income/Loss: " + accounts.getIncome());
            break;
        }
        case "Main Menu": {
            await displayMainMenu();
            break;
        }
        default: {
            console.log("Exit program!!!");
            loop = false;
            break;
        }
    }
}
async function displayPayTeacherMenu() {
    let list = [];
    if (teachersList.length > 0) {
        for (let i = 0; i < teachersList.length; i++) {
            list.push(teachersList[i].getName());
        }
        list.push("Accounts Menu");
        list.push("Main Menu");
        list.push("Exit");
        editStd = await inquirer.prompt([
            {
                type: "list",
                name: "teach",
                choices: list,
                message: "Please select your option? "
            }
        ]);
        switch (editStd.teach) {
            case "Accounts Menu": {
                await displayAccountsMenu();
                break;
            }
            case "Main Menu": {
                await displayMainMenu();
                break;
            }
            case "Exit": {
                console.log("Exit Program!!!");
                loop = false;
                break;
            }
            default: {
                console.log("Teacher to pay:" + editStd.teach);
                let teacher;
                for (let i = 0; i < teachersList.length; i++) {
                    if (teachersList[i].checkName(editStd.teach)) {
                        teacher = teachersList[i];
                        accounts.paySalary(teacher);
                        break;
                    }
                }
            }
        }
    }
    else {
        console.log("No teacher exist.");
        await displayAccountsMenu();
    }
}
async function displayStudentMenu() {
    answer2 = await inquirer.prompt([
        {
            type: "list",
            name: "studentMenu",
            choices: ['Add Student', 'Edit Student', 'Delete Student', 'Main Menu', 'Exit'],
            message: `Please select your choice: `
        }
    ]);
    switch (answer2.studentMenu) {
        case 'Add Student': {
            console.log("Add new student:");
            await addNewStudent();
            break;
        }
        case 'Edit Student': {
            console.log("Edit Student:");
            await displayEditStudentMenu();
            break;
        }
        case 'Delete Student': {
            console.log("Delete Student:");
            await displayDeleteStudentMenu();
            break;
        }
        case 'Main Menu': {
            console.log("Main menu:");
            await displayMainMenu();
            break;
        }
        default: {
            console.log("Exiting Program.");
            loop = false;
            break;
        }
    }
}
async function displayDeleteStudentMenu() {
    let stdList = [];
    if (studentsList.length > 0) {
        for (let i = 0; i < studentsList.length; i++) {
            stdList.push(studentsList[i].getName());
        }
        stdList.push("Student Menu");
        stdList.push("Main Menu");
        stdList.push("Exit");
        editStd = await inquirer.prompt([
            {
                type: "list",
                name: "stdList",
                choices: stdList
            }
        ]);
        switch (editStd.stdList) {
            case "Student Menu": {
                await displayStudentMenu();
                break;
            }
            case "Main Menu": {
                await displayMainMenu();
                break;
            }
            case "Exit": {
                console.log("Exit Program!!!");
                loop = false;
                break;
            }
            default: {
                console.log("Student to delete: " + editStd.stdList);
                let student;
                for (let i = 0; i < studentsList.length; i++) {
                    if (studentsList[i].getName() === editStd.stdList) {
                        student = studentsList[i];
                        studentsList.splice(studentsList.indexOf(student), 1);
                        console.log("Student Removed: " + student.toString());
                        break;
                    }
                }
                await displayStudentMenu();
                break;
            }
        }
    }
    else {
        console.log("No Student Exists!!!");
        await displayStudentMenu();
    }
}
async function displayDeleteTeacherMenu() {
    let stdList = [];
    if (teachersList.length > 0) {
        for (let i = 0; i < teachersList.length; i++) {
            stdList.push(teachersList[i].getName());
        }
        stdList.push("Teacher Menu");
        stdList.push("Main Menu");
        stdList.push("Exit");
        editStd = await inquirer.prompt([
            {
                type: "list",
                name: "stdList",
                choices: stdList
            }
        ]);
        switch (editStd.stdList) {
            case "Teacher Menu": {
                await displayTeacherMenu();
                break;
            }
            case "Main Menu": {
                await displayMainMenu();
                break;
            }
            case "Exit": {
                console.log("Exit Program!!!");
                loop = false;
                break;
            }
            default: {
                console.log("Teacher to delete: " + editStd.stdList);
                let teacher;
                for (let i = 0; i < teachersList.length; i++) {
                    if (teachersList[i].getName() === editStd.stdList) {
                        teacher = teachersList[i];
                        teachersList.splice(teachersList.indexOf(teacher), 1);
                        console.log("Teacher Removed: " + teacher.toString());
                        break;
                    }
                }
                await displayTeacherMenu();
                break;
            }
        }
    }
    else {
        console.log("No Course Exists!!!");
        await displayTeacherMenu();
    }
}
async function displayDeleteCourseMenu() {
    let stdList = [];
    if (coursesList.length > 0) {
        for (let i = 0; i < coursesList.length; i++) {
            stdList.push(coursesList[i].getCourseTitle());
        }
        stdList.push("Course Menu");
        stdList.push("Main Menu");
        stdList.push("Exit");
        editStd = await inquirer.prompt([
            {
                type: "list",
                name: "stdList",
                choices: stdList
            }
        ]);
        switch (editStd.stdList) {
            case "Course Menu": {
                await displayCourseMenu();
                break;
            }
            case "Main Menu": {
                await displayMainMenu();
                break;
            }
            case "Exit": {
                console.log("Exit Program!!!");
                loop = false;
                break;
            }
            default: {
                console.log("Course to delete: " + editStd.stdList);
                let course;
                for (let i = 0; i < coursesList.length; i++) {
                    if (coursesList[i].getCourseTitle() === editStd.stdList) {
                        course = coursesList[i];
                        coursesList.splice(coursesList.indexOf(course), 1);
                        console.log("Course Removed: " + course.toString());
                        break;
                    }
                }
                await displayCourseMenu();
                break;
            }
        }
    }
    else {
        console.log("No Course Exists!!!");
        await displayCourseMenu();
    }
}
async function displayTeacherMenu() {
    answer3 = await inquirer.prompt([
        {
            type: "list",
            name: "teacherMenu",
            choices: ['Add Teacher', 'Edit Teacher', 'Delete Teacher', 'Main Menu', 'Exit'],
            message: `Please select your choice: `
        }
    ]);
    switch (answer3.teacherMenu) {
        case 'Add Teacher': {
            console.log("Add new teacher:");
            await addNewTeacher();
            break;
        }
        case 'Edit Teacher': {
            console.log("Edit teacher:");
            await displayEditTeacherMenu();
            break;
        }
        case 'Delete Teacher': {
            console.log("Delete teacher:");
            await displayDeleteTeacherMenu();
            break;
        }
        case 'Main Menu': {
            console.log("Main menu:");
            await displayMainMenu();
            break;
        }
        default: {
            console.log("Exiting Program.");
            loop = false;
            break;
        }
    }
}
async function displayCourseMenu() {
    answer4 = await inquirer.prompt([
        {
            type: "list",
            name: "courseMenu",
            choices: ['Add Course', 'Edit Course', 'Delete Course', 'Assign Course Teacher', 'Add Student to course', 'Main Menu', 'Exit'],
            message: `Please select your choice: `
        }
    ]);
    switch (answer4.courseMenu) {
        case 'Add Course': {
            console.log("Add new course:");
            await addNewCourse();
            break;
        }
        case 'Edit Course': {
            console.log("Edit course:");
            await displayEditCourseMenu();
            break;
        }
        case 'Delete Course': {
            console.log("Delete course:");
            await displayDeleteCourseMenu();
            break;
        }
        case 'Assign Course Teacher': {
            console.log("Assign Course Teacher:");
            await displayAssignCourseTeacherMenu();
            break;
        }
        case 'Add Student to course': {
            console.log("Add Student to course:");
            await displayAddStudentToCourseMenu();
            break;
        }
        case 'Main Menu': {
            console.log("Main menu:");
            await displayMainMenu();
            break;
        }
        default: {
            console.log("Exiting Program.");
            loop = false;
            break;
        }
    }
}
async function addNewStudent() {
    addStd = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter student name: "
        },
        {
            type: "number",
            name: "age",
            message: "Please enter student age: "
        },
        {
            type: "list",
            name: "gender",
            choices: ["Male", "Female"],
            default: "Male",
            message: "Please enter gender: "
        }
    ]);
    let student = new Student(addStd.name, addStd.age, addStd.gender);
    let rollnum = generateRollNumber();
    student.setRollNumber(rollnum);
    studentsList.push(student);
    console.log("New Student added: " + student.getName());
    await displayStudentMenu();
}
async function addNewTeacher() {
    addStd = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter teacher name: "
        },
        {
            type: "number",
            name: "age",
            message: "Please enter teacher age: "
        },
        {
            type: "list",
            name: "gender",
            choices: ["Male", "Female"],
            message: "Please enter gender: ",
            default: "Male"
        },
        {
            type: "number",
            name: "pay",
            message: "Please enter pay: ",
        }
    ]);
    let teacher = new Teacher(addStd.name, addStd.age, addStd.gender, addStd.pay);
    teachersList.push(teacher);
    console.log("New teacher added: " + teacher.getName());
    await displayTeacherMenu();
}
async function addNewCourse() {
    addStd = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter course name: "
        },
        {
            type: "number",
            name: "fee",
            message: "Please enter course fee: "
        }
    ]);
    let course = new Course(addStd.name, addStd.fee);
    coursesList.push(course);
    console.log("New course added: " + course.getCourseTitle());
    await displayCourseMenu();
}
function generateRollNumber() {
    let rollnum = "PIAIC";
    let rollnumlist = [];
    for (let i = 0; i < studentsList.length; i++) {
        rollnumlist.push(studentsList[i].getRollNumber());
    }
    let l;
    do {
        l = false;
        let num = Math.random() * 100000;
        num = Math.floor(num);
        rollnum = "PIAIC" + num;
        if (rollnum.length === 10) {
            for (let i = 0; i < rollnumlist.length; i++) {
                if (rollnumlist[i] === rollnum) {
                    l = true;
                }
                else {
                    l = false;
                    break;
                }
            }
        }
        else {
            l = true;
        }
    } while (l);
    return rollnum;
}
async function displayEditStudentMenu() {
    let stdList = [];
    if (studentsList.length > 0) {
        for (let i = 0; i < studentsList.length; i++) {
            stdList.push(studentsList[i].getName());
        }
        stdList.push("Student Menu");
        stdList.push("Main Menu");
        stdList.push("Exit");
        editStd = await inquirer.prompt([
            {
                type: "list",
                name: "stdList",
                choices: stdList,
                message: "Please select your option: "
            }
        ]);
        switch (editStd.stdList) {
            case "Student Menu": {
                await displayStudentMenu();
                break;
            }
            case "Main Menu": {
                await displayMainMenu();
                break;
            }
            case "Exit": {
                console.log("Exit Program!!!");
                loop = false;
                break;
            }
            default: {
                console.log("Student to Edit: " + editStd.stdList);
                let student;
                for (let i = 0; i < studentsList.length; i++) {
                    if (studentsList[i].getName() === editStd.stdList) {
                        student = studentsList[i];
                        await editStudentInfo(student);
                        console.log("Student Edited: " + student.getName());
                        break;
                    }
                }
                await displayStudentMenu();
                break;
            }
        }
    }
    else {
        console.log("No Student Exists!!!");
        await displayStudentMenu();
    }
}
async function editStudentInfo(student) {
    let name1;
    let age;
    let gender;
    editStd2 = await inquirer.prompt([
        {
            type: "input",
            name: "name1",
            message: `Please enter name to edit (old name: ${student.getName()}): `
        },
        {
            type: "number",
            name: "age",
            message: `Please enter age to edit (old age: ${student.getAge()}): `
        },
        {
            type: "list",
            name: "gender",
            choices: ["Male", "Female", "No Edit Required"],
            message: `Please select gender to edit (old gender: ${student.getGender()})`
        }
    ]);
    name1 = editStd2.name1;
    age = editStd2.age;
    name1.trim();
    if (name1.length > 0) {
        student.setName(name1);
    }
    if (age > 0) {
        student.setAge(age);
    }
    if (!(editStd2.gender === "No Edit Required")) {
        gender = editStd2.gender;
        student.setGender(gender);
    }
}
async function displayEditTeacherMenu() {
    let stdList = [];
    if (teachersList.length > 0) {
        for (let i = 0; i < teachersList.length; i++) {
            stdList.push(teachersList[i].getName());
        }
        stdList.push("Teacher Menu");
        stdList.push("Main Menu");
        stdList.push("Exit");
        editStd = await inquirer.prompt([
            {
                type: "list",
                name: "stdList",
                choices: stdList,
                message: "Please select your option: "
            }
        ]);
        switch (editStd.stdList) {
            case "Teacher Menu": {
                await displayTeacherMenu();
                break;
            }
            case "Main Menu": {
                await displayMainMenu();
                break;
            }
            case "Exit": {
                console.log("Exit Program!!!");
                loop = false;
                break;
            }
            default: {
                console.log("Teacher to Edit: " + editStd.stdList);
                let teacher;
                for (let i = 0; i < teachersList.length; i++) {
                    if (teachersList[i].getName() === editStd.stdList) {
                        teacher = teachersList[i];
                        await editTeacherInfo(teacher);
                        console.log("Teacher Edited: " + teacher.getName());
                        break;
                    }
                }
                await displayTeacherMenu();
                break;
            }
        }
    }
    else {
        console.log("No Teacher Exists!!!");
        await displayTeacherMenu();
    }
}
async function editTeacherInfo(teacher) {
    let name1;
    let age;
    let gender;
    let pay;
    editStd2 = await inquirer.prompt([
        {
            type: "input",
            name: "name1",
            message: `Please enter name to edit (old name: ${teacher.getName()}): `
        },
        {
            type: "number",
            name: "age",
            message: `Please enter age to edit (old age: ${teacher.getAge()}): `
        },
        {
            type: "list",
            name: "gender",
            choices: ["Male", "Female", "No Edit Required"],
            message: `Please select gender to edit (old gender: ${teacher.getGender()})`
        },
        {
            type: "number",
            name: "pay",
            message: `Please enter pay to edit (old age: ${teacher.getPay()}): `
        }
    ]);
    name1 = editStd2.name1;
    age = editStd2.age;
    name1.trim();
    pay = editStd2.pay;
    if (name1.length > 0) {
        teacher.setName(name1);
    }
    if (age > 0) {
        teacher.setAge(age);
    }
    if (!(editStd2.gender === "No Edit Required")) {
        gender = editStd2.gender;
        teacher.setGender(gender);
    }
    if (pay > 0) {
        teacher.setPay(pay);
    }
}
async function displayEditCourseMenu() {
    let stdList = [];
    if (coursesList.length > 0) {
        for (let i = 0; i < coursesList.length; i++) {
            stdList.push(coursesList[i].getCourseTitle());
        }
        stdList.push("Course Menu");
        stdList.push("Main Menu");
        stdList.push("Exit");
        editStd = await inquirer.prompt([
            {
                type: "list",
                name: "stdList",
                choices: stdList,
                message: "Please select your option: "
            }
        ]);
        switch (editStd.stdList) {
            case "Course Menu": {
                await displayCourseMenu();
                break;
            }
            case "Main Menu": {
                await displayMainMenu();
                break;
            }
            case "Exit": {
                console.log("Exit Program!!!");
                loop = false;
                break;
            }
            default: {
                console.log("Course to Edit: " + editStd.stdList);
                let course;
                for (let i = 0; i < coursesList.length; i++) {
                    if (coursesList[i].getCourseTitle() === editStd.stdList) {
                        course = coursesList[i];
                        await editCourseInfo(course);
                        console.log("Course Edited: " + course.getCourseTitle());
                        break;
                    }
                }
                await displayCourseMenu();
                break;
            }
        }
    }
    else {
        console.log("No Course Exists!!!");
        await displayCourseMenu();
    }
}
async function editCourseInfo(course) {
    let name1;
    let fee;
    editStd2 = await inquirer.prompt([
        {
            type: "input",
            name: "name1",
            message: `Please enter course name to edit (old name: ${course.getCourseTitle()}): `
        },
        {
            type: "number",
            name: "fee",
            message: `Please enter age to edit (old age: ${course.getCourseFee()}): `
        }
    ]);
    name1 = editStd2.name1;
    fee = editStd2.fee;
    name1.trim();
    if (name1.length > 0) {
        course.setCourseTitle(name1);
    }
    if (fee > 0) {
        course.setCourseFee(fee);
    }
}
async function displayAssignCourseTeacherMenu() {
    let courseList = [];
    if (coursesList.length > 0) {
        for (let i = 0; i < coursesList.length; i++) {
            courseList.push(coursesList[i].getCourseTitle());
        }
        courseList.push("Course Menu");
        courseList.push("Main Menu");
        courseList.push("Exit");
        editStd = await inquirer.prompt([
            {
                type: "list",
                name: "course",
                choices: courseList,
                message: "Please select your option: "
            }
        ]);
        switch (editStd.course) {
            case "Course Menu": {
                await displayCourseMenu();
                break;
            }
            case "Main Menu": {
                await displayMainMenu();
                break;
            }
            case "Exit": {
                console.log("Exit Program!!!");
                loop = false;
                break;
            }
            default: {
                console.log("Assign Teacher to course: " + editStd.course);
                let course;
                for (let i = 0; i < coursesList.length; i++) {
                    if (coursesList[i].getCourseTitle() === editStd.course) {
                        course = coursesList[i];
                        await assignCourseTeacher(course);
                        console.log("Teacher assigned to Course: " + course.getCourseTitle() + " Teacher's Info: " + course.getCourseTeacher().getName());
                        break;
                    }
                }
                await displayCourseMenu();
                break;
            }
        }
    }
    else {
        console.log("No Course Exists!!!");
        await displayCourseMenu();
    }
}
async function assignCourseTeacher(course) {
    let teachList = [];
    if (teachersList.length > 0) {
        for (let i = 0; i < teachersList.length; i++) {
            teachList.push(teachersList[i].getName());
        }
        teachList.push("Course Menu");
        teachList.push("Main Menu");
        teachList.push("Exit");
        editStd2 = await inquirer.prompt([
            {
                type: "list",
                name: "teach",
                choices: teachList,
                message: "Please select your option: "
            }
        ]);
        switch (editStd2.teach) {
            case "Course Menu": {
                await displayCourseMenu();
                break;
            }
            case "Main Menu": {
                await displayMainMenu();
                break;
            }
            case "Exit": {
                console.log("Exit Program!!!");
                loop = false;
                break;
            }
            default: {
                let teacher;
                for (let i = 0; i < teachersList.length; i++) {
                    if (teachersList[i].getName() === editStd2.teach) {
                        teacher = teachersList[i];
                        course.setTeacher(teacher);
                        break;
                    }
                }
                break;
            }
        }
    }
    else {
        console.log("No Teacher Exists!!!");
    }
}
async function displayAddStudentToCourseMenu() {
    let courseList = [];
    if (coursesList.length > 0) {
        for (let i = 0; i < coursesList.length; i++) {
            courseList.push(coursesList[i].getCourseTitle());
        }
        courseList.push("Course Menu");
        courseList.push("Main Menu");
        courseList.push("Exit");
        editStd = await inquirer.prompt([
            {
                type: "list",
                name: "course",
                choices: courseList,
                message: "Please select your option: "
            }
        ]);
        switch (editStd.course) {
            case "Course Menu": {
                await displayCourseMenu();
                break;
            }
            case "Main Menu": {
                await displayMainMenu();
                break;
            }
            case "Exit": {
                console.log("Exit Program!!!");
                loop = false;
                break;
            }
            default: {
                console.log("Assign Teacher to course: " + editStd.course);
                let course;
                for (let i = 0; i < coursesList.length; i++) {
                    if (coursesList[i].getCourseTitle() === editStd.course) {
                        course = coursesList[i];
                        await addStudentToCourse(course);
                        break;
                    }
                }
                await displayCourseMenu();
                break;
            }
        }
    }
    else {
        console.log("No Course Exists!!!");
        await displayCourseMenu();
    }
}
async function addStudentToCourse(course) {
    let stdList = [];
    if (studentsList.length > 0) {
        for (let i = 0; i < studentsList.length; i++) {
            stdList.push(studentsList[i].getName());
        }
        stdList.push("Course Menu");
        stdList.push("Main Menu");
        stdList.push("Exit");
        editStd2 = await inquirer.prompt([
            {
                type: "list",
                name: "teach",
                choices: stdList,
                message: "Please select your option: "
            }
        ]);
        switch (editStd2.teach) {
            case "Course Menu": {
                await displayCourseMenu();
                break;
            }
            case "Main Menu": {
                await displayMainMenu();
                break;
            }
            case "Exit": {
                console.log("Exit Program!!!");
                loop = false;
                break;
            }
            default: {
                let student;
                for (let i = 0; i < studentsList.length; i++) {
                    if (studentsList[i].getName() === editStd2.teach) {
                        student = studentsList[i];
                        course.addStudent(student);
                        accounts.feesReceived(student, course);
                        console.log("Student added to Course: " + course.getCourseTitle() + ". Student's Info: " + student.getName());
                        break;
                    }
                }
                break;
            }
        }
    }
    else {
        console.log("No Teacher Exists!!!");
    }
}
async function startLoop() {
    do {
        await displayMainMenu();
    } while (loop);
}
async function startLoopStudentMenu() {
    do {
        await displayStudentMenu();
    } while (loop);
}
async function startLoopTeacherMenu() {
    do {
        await displayTeacherMenu();
    } while (loop);
}
async function startLoopCourseMenu() {
    do {
        await displayCourseMenu();
    } while (loop);
}
async function startLoopAccountsMenu() {
    do {
        await displayAccountsMenu();
    } while (loop);
}
startLoop();
