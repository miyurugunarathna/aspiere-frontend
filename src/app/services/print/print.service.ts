import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import * as FileSaver from "file-saver";
import * as XLSX from 'xlsx';
import { ExcelJson } from "src/app/interface/excel-json.interface";

import { environment } from "src/environments/environment";

const EXCEL_EXTENSION = '.xlsx';
const CSV_EXTENSION = '.csv';
const CSV_TYPE = 'text/plain;charset=utf-8';


@Injectable({
  providedIn: 'root'
})
export class PrintService {

  constructor(private http: HttpClient) { }

  exportPdf(): Observable<any> {
    const exportURL = environment.baseUrl + 'teacher/report/pdf';
    return this.http.get(exportURL);
}

exportHtml(): Observable<any> {
  const exportURL = environment.baseUrl + 'teacher/report/html';
  return this.http.get(exportURL);
}

export(file: string): Observable<Blob> {
  const exportURL = environment.baseUrl + 'teacher/export/' + file;
  return this.http.get(exportURL, {
    responseType: 'blob'
  });
}

export1(format: string): Observable<any> {

const exportURL = environment.baseUrl + 'teacher/report/' + format;
alert(exportURL);
return this.http.get(exportURL);
}

exportToExcel(json: ExcelJson[], fileName: string): void {
// inserting first blank row
const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(
  json[0].data,
  this.getOptions(json[0])
);

for (let i = 1, length = json.length; i < length; i++) {
  // adding a dummy row for separation
  XLSX.utils.sheet_add_json(
    worksheet,
    [{}],
    this.getOptions(
      {
        data: [],
        skipHeader: true
      }, -1)
  );
  XLSX.utils.sheet_add_json(
    worksheet,
    json[i].data,
    this.getOptions(json[i], -1)
  );
}
const workbook: XLSX.WorkBook = { Sheets: { Sheet1: worksheet }, SheetNames: ['Sheet1'] };
// save to file
XLSX.writeFile(workbook, `${fileName}${EXCEL_EXTENSION}`);
}

private getOptions(json: ExcelJson, origin?: number): any {
// adding actual data
const header: string[] = []
const options = {
  skipHeader: true,
  origin: -1,
  header
};
options.skipHeader = json.skipHeader ? json.skipHeader : false;
if (!options.skipHeader && json.header && json.header.length) {
  options.header = json.header;
}
if (origin) {
  options.origin = origin ? origin : -1;
}
return options;
}


exportToCsv(rows: object[], fileName: string, columns?: string[]): void {
if (!rows || !rows.length) {
  return;
}
const separator = ',';
const keys: string[] = Object.keys(rows[0]).filter(k => {
  if (columns?.length) {
    return columns.includes(k);
  } else {
    return true;
  }
});
const csvContent =
  keys.join(separator) +
  '\n' +
  rows.map((row: any) => {
    return keys.map(k => {
      let cell = row[k] === null || row[k] === undefined ? '' : row[k];
      cell = cell instanceof Date
        ? cell.toLocaleString()
        : cell.toString().replace(/"/g, '""');
      if (cell.search(/("|,|\n)/g) >= 0) {
        cell = `"${cell}"`;
      }
      return cell;
    }).join(separator);
  }).join('\n');
  this.saveAsFile(csvContent, `${fileName}${CSV_EXTENSION}`, CSV_TYPE);
}

private saveAsFile(buffer: any, fileName: string, fileType: string): void {
  const data: Blob = new Blob([buffer], { type: fileType });
  FileSaver.saveAs(data, fileName);
}

}
