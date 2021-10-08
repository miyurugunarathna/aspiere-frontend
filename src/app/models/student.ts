export class Student {
    personid: number;
    fname: string;
    lname: string;
    dob: string;
    gender: string;
    email: string;
    phone: string;
    password: string;
    role: string;
    registeredDate: Date;
	approved: string;
    active: boolean;
    type: string;

    constructor() {
        this.dob = '';
        this.email = '';
        this.fname = '';
        this.lname = '';
        this.gender = '';
        this.password = '';
        this.phone = '';
        this.registeredDate = new Date();
        this.approved = 'Pending';
        this.active = true;
        this.type = 'Student';
    }
}
