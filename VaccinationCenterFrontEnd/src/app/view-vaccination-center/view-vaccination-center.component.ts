import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { VaccinationCenterService } from '../service/vaccination-center.service';
import { VaccinationCenter } from '../VaccinationCenter';

@Component({
  selector: 'app-view-vaccination-center',
  templateUrl: './view-vaccination-center.component.html',
  styleUrls: ['./view-vaccination-center.component.css']
})
export class ViewVaccinationCenterComponent implements OnInit {

  vaccinationCenters: VaccinationCenter[];

  constructor(private vaccinationCenterService: VaccinationCenterService, private router: Router,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.logIn();
    this.getVaccinationCenter();
  }

  getVaccinationCenter() {
    this.vaccinationCenterService.viewVaccinationCenter()
      .subscribe(data => { this.vaccinationCenters = data });
  }

  update(id: any) {
    console.log("inside update()");
    this.router.navigate(['updateVaccinationCenter', id]);
  }

  delete(id: number) {
    console.log("inside delete()");
    this.vaccinationCenterService.deleteVaccinationCenterById(id)
      .subscribe(data => {
        console.log(data);
        this.getVaccinationCenter();
      })
  }
}
