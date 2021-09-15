import { isConstructorDeclaration } from "typescript";

export class Student {
    id: string;
    pid: string;
    fname: string;
    lname: string;
    dob: String;
    gender: string;
    email: string;
    phone: string;
    password: string

    constructor(){
        this.dob="";
        this.email="";
        this.fname="";
        this.gender="";
        this.id="";
        this.lname="";
        this.password="";
        this.phone="";
        this.pid="";
    }

}

