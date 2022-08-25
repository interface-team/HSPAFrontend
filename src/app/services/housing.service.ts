import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IProperty } from '../property/IProperty.interface';
import { City } from 'src/Models/City';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}

  getAllProperties(sellRent: number): Observable<IProperty[]> {
    //return this.http.get('data/properties.json');

    return this.http.get('data/properties.json').pipe(
      map((data) => {
        const propArray: Array<IProperty> = [];
        for (const index in data) {
          //console.log("test"+Object.values(data)[Number(index)].SellRent);
          if (Object.values(data)[Number(index)].SellRent === sellRent)
            propArray.push(Object.values(data)[Number(index)]);
        }
        return propArray;
      })
    );
  }

  getAllCities():Observable<string[]>{
    //var url='http://localhost:38043/api/city';
    //var url = 'http://localhost:56447/api/city/GetCities'
    //var url = '/api/city/GetCities'
    var url='http://interfaceteam-001-site1.ctempurl.com/api/city/GetCities'
    return this.http.get<string[]>(url);
  }



  addCity(data:City):Observable<number>{

    //var url = 'http://localhost:56447/api/city/AddCity';
    //var url = '/api/city/AddCity';
    var url = 'http://interfaceteam-001-site1.ctempurl.com/api/city/AddCity'
    //var data = { "name": "Goa"};
    return this.http.post<number>(url,data);
  }
}
