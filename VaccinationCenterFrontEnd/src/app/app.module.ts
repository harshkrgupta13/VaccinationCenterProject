import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ViewVaccinationCenterComponent } from './view-vaccination-center/view-vaccination-center.component';
import { AddVaccinationCenterComponent } from './add-vaccination-center/add-vaccination-center.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookSlotComponent } from './book-slot/book-slot.component';
import { ViewCitizenComponent } from './view-citizen/view-citizen.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './service/auth.guard';
import { AuthService } from './service/auth.service';
import { UpdateVaccinationCenterComponent } from './update-vaccination-center/update-vaccination-center.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    ViewVaccinationCenterComponent,
    AddVaccinationCenterComponent,
    BookSlotComponent,
    ViewCitizenComponent,
    HeaderComponent,
    UpdateVaccinationCenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
