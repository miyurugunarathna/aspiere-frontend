export class Teacher {
    personid: number;
    fname: string;
    lname: string;
    dob: string;
    gender: string;
    email: string;
    phone: string;
    password: string;
    approved: string;
    active: boolean;
    qualifititle: string;
    description: string;
    university: string;
    bank: string;
    branch: string;
    accnum: string;
    type: string;
    registeredDate: Date;
    packageid: number;

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
        this.type = 'Teacher';
        this.packageid = 1;
    }

}

// export interface Qualifications {
//     title: string;
//     description: string;
//     university: string;
// }
