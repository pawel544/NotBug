import {Injectable} from '@angular/core';
import {Car} from '../models/car.models'

@Injectable({
providedIn: 'root'})
export class CarService{
    private cars:Car []=[];
    constructor(){
        this.loadCars();
    }
    private loadCars(){
        const storedCars = localStorage.getItem('cars');
        if (storedCars){ this.cars= JSON.parse(storedCars);

        }
    }
    private saveCars(){
        localStorage.setItem('cars', JSON.stringify(this.cars));
    }
    addCars(car:Car){
        this.cars.push(car);
        this.saveCars();
    }
    getCars():Car[]{
        return this.cars;
    }
    getCarByID(id:number): Car| undefined{
        return this.cars.find(car=> car.id === id)
    }
}



