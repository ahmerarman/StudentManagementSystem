export interface Person {
/*    private name: string;
    private age: number;
    private sex: "Male" | "Female";*/

    getName(): string;
    getAge(): number;
    getGender(): "Male" | "Female";

    setName(name: string): void;
    setAge(age: number): void;
    setGender(sex: "Male" | "Female"): void;

    checkName(name: string): boolean;
    checkAge(age: number): boolean;
    checkGender(sex: "Male" | "Female"): boolean;
}

