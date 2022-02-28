import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-editor',
  templateUrl: './car-editor.component.html',
  styleUrls: ['./car-editor.component.scss']
})
export class CarEditorComponent implements OnInit {

  cars$: Observable<Car> = this.ar.params.pipe(
    switchMap(params => this.carService.get(params['id']))
  );

  constructor(
    private ar: ActivatedRoute,
    private carService: CarService,
  ) { }

  ngOnInit(): void {
  }

}
