import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.logIn();
  }

  bookSlot() {
    console.log("inside login()");
    this.router.navigate(['/bookSlot']);
  }

  addCenter() {
    this.router.navigate(['/addVaccinationCenter']);
  }

  viewCenter() {
    this.router.navigate(['/viewVaccinationCenter']);
  }

  viewCitizensList() {
    this.router.navigate(['/viewCitizensList']);
  }

  logout() {
    this.router.navigate(['/login']);
  }

  home() {
    this.router.navigate(['/homepage']);
  }

}
