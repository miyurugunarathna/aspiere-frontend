export interface Teacher {
    id: string;
    pid: string;
    fname: string;
    lname: string;
    dob: Date;
    gender: string;
    email: string;
    phone: string;
    password: string;
    qualifications: Qualifications;
    bank: string;
    branch: string;
    accnum: number;

    
}


export interface Qualifications {
    title: string;
    description: string;
    university: string;
}
