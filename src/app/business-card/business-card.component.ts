import { Component, OnInit, Input } from '@angular/core';
import { IEmployee } from '../models/IEmployee';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent implements OnInit {
  @Input() employee: IEmployee;
  public flipDiv: boolean;

  constructor() { }

  ngOnInit() {
  }

  flip(): void {
    this.flipDiv = !this.flipDiv;
  }

}
