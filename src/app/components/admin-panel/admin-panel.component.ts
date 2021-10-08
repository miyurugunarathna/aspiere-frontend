import { Component, OnInit } from '@angular/core';

export type EditorType = 'students' | 'teachers';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  editor: EditorType = 'students';

  constructor() { }

  ngOnInit(): void {
  }

  get showStudentsList() {
    return this.editor === 'students';
  }

  get showTeachersList() {
    return this.editor === 'teachers';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }

}
