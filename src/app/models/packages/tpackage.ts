export class Tpackage {
    id: number;
    packageName: string;
    maxCourse: number;
    maxStudent: number;
    commission: number;
    comType: number;
    annualFee: number;
    monthlyFee: number;
    defaultPack: boolean;
    createdDate: string;
    modifiedDate: string;

    constructor(){
        this.id=0;
        this.packageName='';
        this.maxCourse=0;
        this.maxStudent=0;
        this.commission=0;
        this.comType=1;
        this.annualFee=0;
        this.monthlyFee=0;
        this.defaultPack=false;
        this.createdDate='';
        this.modifiedDate='';
    }
}
