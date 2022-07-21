import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVaccinationCenterComponent } from './add-vaccination-center/add-vaccination-center.component';
import { BookSlotComponent } from './book-slot/book-slot.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth.guard';
import { UpdateVaccinationCenterComponent } from './update-vaccination-center/update-vaccination-center.component';
import { ViewCitizenComponent } from './view-citizen/view-citizen.component';
import { ViewVaccinationCenterComponent } from './view-vaccination-center/view-vaccination-center.component';

const routes: Routes = [

  
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "homepage", canActivate: [AuthGuard], component: HomepageComponent },
  { path: "viewVaccinationCenter", canActivate: [AuthGuard], component: ViewVaccinationCenterComponent },
  { path: "addVaccinationCenter", canActivate: [AuthGuard], component: AddVaccinationCenterComponent },
  { path: "bookSlot", canActivate: [AuthGuard], component: BookSlotComponent },
  { path: "viewCitizensList", canActivate: [AuthGuard], component: ViewCitizenComponent },
  { path: "updateVaccinationCenter/:id", canActivate: [AuthGuard], component: UpdateVaccinationCenterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
