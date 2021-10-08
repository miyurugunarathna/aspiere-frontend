import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; 
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { PrintService } from 'src/app/services/print/print.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import { ExcelJson } from 'src/app/interface/excel-json.interface';

import html2canvas from 'html2canvas';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];
  sid = '';

  selectedApprovedStatus: string = '';
  public filteredData: Student[] = [];

  fname: String;

  private student = new Student();  
  private data: string;

  fileName= 'students_list.xlsx';
  
  constructor(private studentService: StudentService, private printService: PrintService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getStudents();

    
    this.filteredData = this.students;
  }

  private getStudents() {
    this.studentService.getAll().subscribe(data => {
      this.students = data;
    });
  }

  addStudent() {
    this.router.navigate(['student/add']);
  }
  
  viewStudent(id: number) {
    this.router.navigate(['student/view', id]);
  }

  editStudent(id: number) {
    this.router.navigate(['student/update', id]);
  }

  deleteStudent(id: number) {
    this.studentService.delete(id).subscribe(data => {
      console.log(data);
      this.getStudents();
    })
  }

  form = new FormGroup({  
    fname : new FormControl(),  
    lname : new FormControl()  
  });  


  onApprovedStatusChange (event: any) {
    this.selectedApprovedStatus = event.target.value;
  }

  public printList(divID: string): void {
    let printList, popupWin, head, html;
    head = document.getElementsByTagName('head');
    printList = document.getElementById(divID)?.innerHTML;
    html = '<html>\n<head>\n';
    html += head[0].innerHTML;
    html += '</head>\n</body>\n';
    html += printList;
    html += '</body>\n</html>'
    popupWin = window.open('', '_blank', 'height=100%, width=auto');
    popupWin?.document.open();
    popupWin?.document.write(html);
    popupWin?.document.close();
    popupWin?.window.print();
  }

  exportToCsv(): void {
    this.printService.exportToCsv(this.students, 'student_list', ['id', 'fname', 'lname', 'dob', 'gender', 'email', 'phone', 'approved', 'active']);
  }

  exportToExcel(): void {
    const edata: Array<ExcelJson> = [];
    const udt: ExcelJson = {
      data: [
        { A: 'Students List' }, // title
        { A: 'ID', B: 'First Name', C: 'Last Name', D: 'DOB', E: 'Gender', F: 'Email', G: 'Phone', H: 'Approved', I: 'Active'}, // table header
      ],
      skipHeader: true
    };
    this.students.forEach(student => {
      udt.data.push({
        A: student.personid,
        B: student.fname,
        C: student.lname,
        D: student.dob,
        E: student.gender,
        F: student.email,
        G: student.phone,
        H: student.approved,
        I: student.active
      });
    });
    edata.push(udt);
    this.printService.exportToExcel(edata, 'students_list');
    
  }


  public export(format: string) {
    this.printService.export1(format).subscribe(data => {
      this.students = data;
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
    doc = document.getElementById('student_table');

    html2canvas(doc).then(canvas => {
      let fileWidth = 188;
      let fileHeight = canvas.height * fileWidth / canvas.width;
      const fileUrl = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4');
      let position = 10;
      pdf.addImage(fileUrl, 'png', 10, position, fileWidth, fileHeight);
      pdf.save('students_list.pdf');
    })
  }

  public exportHtml() {
    this.printService.exportHtml().subscribe(data => {
      this.students = data;
    });
  }

  public exportExcel(): void {

    /* Pass table id */
    let element = document.getElementById("student_table"); 
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
