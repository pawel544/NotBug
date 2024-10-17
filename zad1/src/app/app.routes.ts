import { Routes,RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { CarListComponent } from "./car-list/car-list.component";
import { CarDetalsComponent } from "./car-detals/car-detals.component";
import { AddCarComponent } from "./add-car/add-car.component";
export const routes: Routes = [
    {path: '',redirectTo: '/cars', pathMatch: 'full'},
    { path: '**', redirectTo: '/cars' } ,
    {path: 'cars', component: CarListComponent},
    {path: 'add-car', component: AddCarComponent},
    {path: 'car-details/:id', component: CarDetalsComponent},
    
    ];
    
    @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    })
    export class AppRoutingModule {};
