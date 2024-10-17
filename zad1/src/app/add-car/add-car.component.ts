import {Component} from '@angular/core'
import { CarService } from '../services/car.services'
import {Car} from "../models/car.models"
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  name: string ='';
  brand: string= '';
  id: number= Date.now();
  constructor (private carService: CarService ) {}
  addCar(){
      const newCar: Car={
          id: this.id,
          name: this.name,
          brand: this.brand,
          service:[]
      };

      this.carService.addCars(newCar);
      this.name='';
      this.brand=''
  }
  }

