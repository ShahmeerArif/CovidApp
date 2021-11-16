import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  selectedCountryRecord: any;
  @Input() selectedCountry: any;

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedCountry) {
      this.dataService.getRealTimeData(this.selectedCountry).subscribe(response => {
        if (response.length > 0) {
          this.selectedCountryRecord = response[response.length - 1];
        } else {
          this.selectedCountryRecord = null;
        }
      });
    }
  }

}

