import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CarListComponent } from "./car-list/car-list.component";
import { AddCarComponent } from "./add-car/add-car.component";
import { CarDetalsComponent } from "./car-detals/car-detals.component";
import { FormsModule } from "@angular/forms";

NgModule({
    declarations:[
        AppComponent,
        CarListComponent,
        AddCarComponent,
        CarDetalsComponent
    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers:[],
    bootstrap:[AppComponent]
})
export class AppModule {}