import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { VaccinationCenterService } from '../service/vaccination-center.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alert: boolean = false;
  //session:any

  userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private router: Router, private vaccinationCenterService: VaccinationCenterService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.logOut();
  }

  login(username: string, password: any) {
    let json = JSON.stringify({
      username: username,
      password: password
    });
    console.log(json);
    this.vaccinationCenterService.authenticateUser(json).subscribe(data => {
      console.log(data)
      if (data.authenticated) {
        this.authService.logIn();
       /*  localStorage.setItem('session',JSON.stringify(data)); */
        this.router.navigate(["/homepage"]);
      }
      this.alert = true;
    })

  }

}
