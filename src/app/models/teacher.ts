export class Teacher {
    id: string;
    pid: string;
    fname: string;
    lname: string;
    dob: string;
    gender: string;
    email: string;
    phone: string;
    password: string;
    role: string;
    approved: string;
    active: boolean;
    roles: Array<string>;
    qualifications: Qualifications;
    bank: string;
    branch: string;
    accnum: string;
}

export interface Qualifications {
    title: string;
    description: string;
    university: string;
}
