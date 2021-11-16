import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid-app2';
  selectedCountry: any;

  getSelectedCountry(value: any) {
    this.selectedCountry = value;
  }
}
