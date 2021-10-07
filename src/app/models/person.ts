export class Person {
    personID: number;
    dob: Date;
    email: string;
    fName: string;
    lName: string;
    gender: string;
    password: string;
    phone: number;
    imgURL: string;
    registeredDate: Date;
    status: string;
    type: string;

    constructor() {
        this.personID = 0;
        this.dob = new Date;
        this.email = '';
        this.fName = '';
        this.gender = '';
        this.password = '';
        this.phone = 0;
        this.imgURL = '';
        this.registeredDate = new Date;
        this.status = '';
        this.type = '';
    }
}
