import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  countries: any;
  country: any;
  confirmed: any;
  recovered: any;
  deaths: any;
  active: any;
  Country: any;

  @Output() onCountryChanged = new EventEmitter();

  constructor(private _service: DataServiceService) { }

  ngOnInit() {
    this._service.getCountries().subscribe(data => {
      this.countries = data;
    })
  }

  onCountryChange(event: any) {
    let value = event.target.value;
    if (value != 0)
      this.onCountryChanged.emit(value);
  }

  // getData(){
  //     this._service.getRealTimeData(this.country).subscribe(Response => {
  //     var index = Response.lenght - 1;
  //     this.confirmed = Response[index].Confirmed;
  //     this.recovered = Response[index].Recovered;
  //     this.active = Response[index].Active;
  //     this.deaths = Response[index].Deaths;
  //     this.Country = Response[index].Country;
  //   })
  // }


}
