import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';
import { PrintService } from 'src/app/services/print/print.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import { ExcelJson } from 'src/app/interface/excel-json.interface';

import html2canvas from 'html2canvas';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  
  teachers: Teacher[] = [];

  selectedApprovedStatus: string = '';

  fileName= 'teachers_list.xlsx';

  constructor(private teacherService: TeacherService, private printService: PrintService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  private getTeachers() {
    this.teacherService.getAll().subscribe(data => {
      this.teachers = data;
    });
  }

  addTeacher() {
    this.router.navigate(['teacher/add']);
  }
  
  viewTeacher(id: number) {
    this.router.navigate(['teacher/view', id]);
  }

  editTeacher(id: number) {
    this.router.navigate(['teacher/update', id]);
  }

  deleteTeacher(id: number) {
    this.teacherService.delete(id).subscribe(data => {
      console.log(data);
      this.getTeachers();
    })
  }

  search() {
    // this.s.fname = this.fname.value;
    // this.s.lname = this.lname.value;
    // this.getData(this.s); 
  }

  onApprovedStatusChange (event: any) {
    this.selectedApprovedStatus = event.target.value;
  }

  exportToCsv(): void {
    this.printService.exportToCsv(this.teachers, 'teachers_list', ['personid', 'fname', 'lname', 'dob', 'gender', 'email', 'phone', 'approved', 'active']);
  }

  exportToExcel(): void {
    const edata: Array<ExcelJson> = [];
    const udt: ExcelJson = {
      data: [
        { A: 'Teachers List' }, // title
        { A: 'ID', B: 'First Name', C: 'Last Name', D: 'DOB', E: 'Gender', F: 'Email', G: 'Phone', H: 'Package', I: 'Approved', J: 'Active'}, // table header
      ],
      skipHeader: true
    };
    this.teachers.forEach(teacher => {
      udt.data.push({
        A: teacher.personid,
        B: teacher.fname,
        C: teacher.lname,
        D: teacher.dob,
        E: teacher.gender,
        F: teacher.email,
        G: teacher.phone,
        H: teacher.packageid,
        I: teacher.approved,
        J: teacher.active
      });
    });
    edata.push(udt);
    this.printService.exportToExcel(edata, 'teachers_list');
    
  }

  public export(format: string) {
    this.printService.export1(format).subscribe(data => {
      this.teachers = data;
    });
  }


  public Print(): void {  
    let doc: any;
    doc = document.getElementById('student_table');
    let WindowPrt: any
    WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    WindowPrt.document.write(doc.innerHTML);
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    WindowPrt.close();
  }

  public exportPdf(): void {  
    let doc: any;
    doc = document.getElementById('teacher_table');

    html2canvas(doc).then(canvas => {
      let fileWidth = 188;
      let fileHeight = canvas.height * fileWidth / canvas.width;
      const fileUrl = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4');
      let position = 10;
      pdf.addImage(fileUrl, 'png', 10, position, fileWidth, fileHeight);
      pdf.save('teachers_list.pdf');
    })
  }

  public exportHtml() {
    this.printService.exportHtml().subscribe(data => {
      this.teachers = data;
    });
  }

  public exportExcel(): void {

    /* Pass table id */
    let element = document.getElementById("teacher_table"); 
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* Generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* Save to file */
    XLSX.writeFile(wb, this.fileName);

  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
