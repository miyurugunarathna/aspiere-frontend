import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person';
// import { ErrorStateMatcher } from '@angular/material/core';

// /** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email: '';
  password: '';
  isLoggedIn = false;
  isLoginFailed = false;
  //matcher = new MyErrorStateMatcher();
  isLoadingResults = false;
  person: any;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'userName' : [null, Validators.required],
      'password' : [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.authService.login(form)
      .subscribe(res => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.isLoggedIn = true;
          alert(res.token);
          this.person = this.getPerson(res.token);
          console.log(this.person);
          if (this.person.role == 'Student') {
            this.router.navigate([`app/classes`]);
          }
          if (this.person.role == 'Teacher') {
            this.router.navigate([`teacher/classes`]);
          }
          if (this.person.sub == 'admin@gmail.com') {
            this.router.navigate([`admin/registrations`]);
          }
        }
      }, (err) => {
        console.log(err);
        alert("Error");
        this.isLoginFailed = true;
        this.router.navigate(['register']);
      });
  }

  register() {
    this.router.navigate(['register']);
  }

  private getPerson(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

}
