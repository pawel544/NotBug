import { Component } from '@angular/core';
import { CarService } from '../services/car.services';
import {Car} from '../models/car.models'
import {CommonModule} from '@angular/common'
@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
cars: Car[] = [];
constructor(private carService: CarService){
  this.cars=this.carService.getCars();
} 

viewDetails(carId: number) {
  console.log(`Wyświetlanie szczegółów samochodu o ID: ${carId}`);
}}