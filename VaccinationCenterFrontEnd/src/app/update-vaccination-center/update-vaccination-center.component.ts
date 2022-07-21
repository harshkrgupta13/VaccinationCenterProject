import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VaccinationCenterService } from '../service/vaccination-center.service';
import { VaccinationCenter } from '../VaccinationCenter';

@Component({
  selector: 'app-update-vaccination-center',
  templateUrl: './update-vaccination-center.component.html',
  styleUrls: ['./update-vaccination-center.component.css']
})
export class UpdateVaccinationCenterComponent implements OnInit {

  alert: boolean = false;

  updateVC = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    availability: new FormControl('')
  })

  vaccinationCenter: VaccinationCenter = new VaccinationCenter();
  id: any

  constructor(private vaccinationCenterService: VaccinationCenterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.vaccinationCenterService.viewVaccinationCenterById(this.id)
      .subscribe(data => { this.vaccinationCenter = data; console.log(this.vaccinationCenter) })
  }

  updateVCenter() {
    console.log("inside updateVC()");
    this.vaccinationCenterService.updateVaccinationCenter(this.id, this.vaccinationCenter)
      .subscribe(data => { console.log(data) })
    this.alert = true;
  }

}
