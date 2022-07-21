import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { VaccinationCenterService } from '../service/vaccination-center.service';
import { VaccinationCenter } from '../VaccinationCenter';

@Component({
  selector: 'app-add-vaccination-center',
  templateUrl: './add-vaccination-center.component.html',
  styleUrls: ['./add-vaccination-center.component.css']
})
export class AddVaccinationCenterComponent implements OnInit {

  alert:boolean=false;
 
  addVCenter=new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
    availability:new FormControl('')
  })  
  
  vaccinationCenter: VaccinationCenter = new VaccinationCenter();

  constructor(private router: Router, private vaccinationCenterService: VaccinationCenterService,
    private authService:AuthService) { }

  ngOnInit() :void {
  this.authService.logIn();
  }

  add() {
    console.log("inside add()");
    console.log(this.vaccinationCenter);
    this.vaccinationCenterService.addVaccinationCenter(this.vaccinationCenter)
      .subscribe(data => {
        console.log(data);
        this.alert=true;
        this.addVCenter.reset({});
       // this.router.navigate([""]);
      }, error => console.log(error));
  }
}
