import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private http: HttpClient) {}

  saveApplicant(data: any) {
    return this.http.post('http://localhost:4200/applicant', data);
  }

  getApplicants() {
    return this.http.get('http://localhost:4200/applicants');
  }

  getTechs() {
    return this.http.get('http://localhost:4200/techs');
  }

  getEducations() {
    return this.http.get('http://localhost:4200/educations');
  }
}
