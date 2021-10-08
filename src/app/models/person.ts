export class Person {
    personid: number;
    dob: string;
    email: string;
    fname: string;
    lname: string;
    gender: string;
    password: string;
    phone: number;
    imgURL: string;
    registeredDate: Date;
    status: string;
    type: string;

    constructor() {
        this.personid = 0;
        this.dob = '';
        this.email = '';
        this.fname = '';
        this.lname = '';
        this.gender = '';
        this.password = '';
        this.phone = 0;
        this.imgURL = '';
        this.registeredDate = new Date();
        this.status = '';
        this.type = '';
    }
}
