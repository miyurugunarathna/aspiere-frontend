export class Badges {
    badgeID : number;
    badgeName : string;
    description : string;
    conditions : string;
    createdDate : string;
    modifiedDate : string;
    subjectName : string;
    classID : number;
    teacherID: number;

    constructor() {
        this.badgeID = 0;
        this.badgeName = '';
        this.description = '';
        this.conditions = '';
        this.createdDate = '';
        this.modifiedDate = '';
        this.subjectName = '';
        this.classID = 0;
        this.teacherID = 0;
    }
}