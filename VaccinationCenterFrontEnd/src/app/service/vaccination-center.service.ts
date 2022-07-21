import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Citizen } from '../Citizen';
import { VaccinationCenter } from '../VaccinationCenter';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VaccinationCenterService {

  private addVaccinationCenterURL = "http://localhost:8082/vaccinationcenter/add";
  private viewVaccinationCenterURL = "http://localhost:8082/vaccinationcenter/list";
  private bookSlotForCitizenURL = "http://localhost:8081/citizen/addCitizen";
  private viewListCitizensURL = "http://localhost:8081/citizen/list";
  private viewCitizenListWithCenterURL = "http://localhost:8082/vaccinationcenter/id";
  private viewVaccinationCenterByIdURL = "http://localhost:8082/vaccinationcenter";
  private updateAvailabilityURL = "http://localhost:8082/vaccinationcenter/updateAvailability";
  private updateVaccinationCenterURL = "http://localhost:8082/vaccinationcenter";
  private deleteVaccinationCenterByIdURL = "http://localhost:8082/vaccinationcenter";
  private userAuthenticateURL = "http://localhost:8082/user/authenticate";

  constructor(private http: HttpClient) { }

  addVaccinationCenter(vaccinationcenter: VaccinationCenter): Observable<any> {
    return this.http.post(this.addVaccinationCenterURL, vaccinationcenter);
  }

  viewVaccinationCenter(): Observable<any> {
    return this.http.get(this.viewVaccinationCenterURL);
  }

  bookSlotForCitizen(citizen: Citizen): Observable<any> {
    return this.http.post(this.bookSlotForCitizenURL, citizen);
  }

  viewListCitizens(): Observable<any> {
    return this.http.get(this.viewListCitizensURL);
  }

  viewCitizenListWithCenter(id: any): Observable<any> {
    return this.http.get(`${this.viewCitizenListWithCenterURL}/${id}`);
  }

  viewVaccinationCenterById(id:any):Observable<any>{
    return this.http.get(`${this.viewVaccinationCenterByIdURL}/${id}`);
  }

  updateAvailability(id:any,vaccinationCenter:VaccinationCenter):Observable<any>{
    return this.http.put<any>(`${this.updateAvailabilityURL}/${id}`,vaccinationCenter);
  }

  updateVaccinationCenter(id:any,vaccinationCenter:VaccinationCenter):Observable<any>{
    return this.http.put<any>(`${this.updateVaccinationCenterURL}/${id}`,vaccinationCenter);
  }

  deleteVaccinationCenterById(id:number):Observable<any>{
    return this.http.delete<any>(`${this.deleteVaccinationCenterByIdURL}/${id}`);
  }

  authenticateUser(json): Observable<any> {
    return this.http.post<any>(this.userAuthenticateURL, json, httpOptions);
  }

}