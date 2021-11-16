import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service'

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  totalRecord: any

  constructor(private _service: DataServiceService) { }

  ngOnInit() {
    this._service.getTotalData().subscribe(data => {
      this.totalRecord = data;

    })
  }



}
