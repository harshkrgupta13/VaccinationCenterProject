import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Citizen } from '../Citizen';
import { AuthService } from '../service/auth.service';
import { VaccinationCenterService } from '../service/vaccination-center.service';
import { VaccinationCenter } from '../VaccinationCenter';

@Component({
  selector: 'app-view-citizen',
  templateUrl: './view-citizen.component.html',
  styleUrls: ['./view-citizen.component.css']
})
export class ViewCitizenComponent implements OnInit {

  citizens: Citizen[];
  vaccinationCenter: VaccinationCenter = new VaccinationCenter();

  constructor(private vaccinationCenterService: VaccinationCenterService, private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.logIn();
    this.vaccinationCenterService.viewListCitizens().subscribe(data => this.citizens = data);

  }

  showCenter(id: any) {
    console.log("inside showCenter()")
    console.log(id)
    this.vaccinationCenterService.viewVaccinationCenterById(id)
      .subscribe(data => { this.vaccinationCenter = data; console.log(this.vaccinationCenter) })
    //this.router.navigate(['viewVaccinationCenter']);

  }
}
