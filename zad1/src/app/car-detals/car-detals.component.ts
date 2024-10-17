import { Component, OnInit } from '@angular/core';
import { ActivatedRoute}  from '@angular/router';
import { CarService } from '../services/car.services';
import { Car } from '../models/car.models';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-car-detals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-detals.component.html',
  styleUrls: ['./car-detals.component.css']
})
export class CarDetalsComponent implements OnInit {
  car?:Car;
  constructor(
    private route: ActivatedRoute,
    private carService: CarService
){}
ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.car= this.carService.getCarByID(id);
}
}
