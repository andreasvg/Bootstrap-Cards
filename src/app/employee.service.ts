import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IEmployee } from './models/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>('http://localhost:8080/api/employees');  // ToDo: create a config service
  }
}
