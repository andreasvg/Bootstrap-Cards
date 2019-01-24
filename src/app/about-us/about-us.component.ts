import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../models/IEmployee';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  public employees: IEmployee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.loadEmployeeData();
  }

  loadEmployeeData(): void {
    this.employeeService.getEmployees()
      .subscribe((data: IEmployee[]) => this.employees = data);
  }

}
