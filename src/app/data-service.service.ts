import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  country:any

  constructor(private http:HttpClient) { }

  // getCountries():Observable<any>{
  //   const url = "https://api.covid19api.com/countries";
  //   return this.http.get<any>(url);
  // }

  getCountries(){
    return this.http.get<any>(`${environment.url}/countries`);
  }

  getTotalData():Observable<any>{
    const url = "https://api.covid19api.com/world/total";
    return this.http.get<any>(url);
  }

  getRealTimeData(slug:any):Observable<any>{
    const url = "https://api.covid19api.com/total/country/" + slug;
    return this.http.get<any>(url);
    
  }


}
 