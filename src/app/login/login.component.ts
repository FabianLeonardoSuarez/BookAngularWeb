import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickSubmit(credentials: any) {
    console.log(credentials.email, credentials.password);
    credentials.email == '' &&
      credentials.password == '' &&
      this.router.navigate(['/dashboard']);
  }
}
