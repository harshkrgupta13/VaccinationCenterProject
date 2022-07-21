import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Citizen } from '../Citizen';
import { AuthService } from '../service/auth.service';
import { VaccinationCenterService } from '../service/vaccination-center.service';
import { VaccinationCenter } from '../VaccinationCenter';

@Component({
  selector: 'app-book-slot',
  templateUrl: './book-slot.component.html',
  styleUrls: ['./book-slot.component.css']
})
export class BookSlotComponent implements OnInit {

  alert: boolean = false;

  bookVSlot = new FormGroup({
    name: new FormControl('')
  })

  citizen: Citizen = new Citizen();
  vaccinationCenters: VaccinationCenter[];
  vaccinationCenter: VaccinationCenter = new VaccinationCenter();
  id: number;
  selected: any;
  vaccine: any[]


  constructor(private router: Router, private vaccinationCenterService: VaccinationCenterService,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.logIn();
    this.vaccinationCenterService.viewVaccinationCenter().subscribe(data => {
      this.vaccinationCenters = data;
      console.log(this.vaccinationCenters)
    });

  }

  update(e) {
    this.selected = e.target.value
  }

  book() {
    console.log("inside book()");
    console.log(this.selected);
    this.citizen.vaccinationCenterId = this.selected
    console.log(this.citizen)

    this.vaccinationCenterService.viewVaccinationCenterById(this.selected)
      .subscribe(data => {
        console.log(data)

        this.vaccinationCenterService.updateAvailability(this.selected, data)
          .subscribe(data => { this.vaccine = data; console.log(this.vaccine) })
      })

    this.vaccinationCenterService.bookSlotForCitizen(this.citizen)
      .subscribe(data => {
        console.log(data)
        this.alert = true;
        this.bookVSlot.reset({})
        // this.router.navigate([""]);
      })
  }
}