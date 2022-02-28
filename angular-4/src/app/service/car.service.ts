import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl: string = environment.apiUrl;

  entityName: string = 'cars';

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(car: Car): Observable<any> {
    return this.http.post<Observable<any>>(`${this.apiUrl}${this.entityName}`, car);
  }

  update(car: Car): Observable<Car> {
    return this.http.patch<Car>(
      `${this.apiUrl}${this.entityName}/${car.id}`,
      car
    );
  }

  delete(car: Car): Observable<any> {
    return this.http.delete(`${this.apiUrl}${this.entityName}/${car.id}`);
  }
}
