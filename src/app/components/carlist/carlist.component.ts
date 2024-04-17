import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarApiService } from '../../services/car-api.service';
import { ICar } from '../../interfaces/car';
import { NewCar } from '../../interfaces/car';

@Component({
  selector: 'app-carlist',
  standalone: true,
  imports: [],
  templateUrl: './carlist.component.html',
  styleUrl: './carlist.component.css'
})
export class CarlistComponent {
  carsData: ICar|any;
  show: boolean=false;

  constructor(private _carAPIService: CarApiService) { }

  ngOnInit() {
    this.getCars()
  }

  getCars() {
    this._carAPIService.getCarDetails().subscribe(carsData =>
      { this.carsData = carsData
    });
  }

  addCar(make:string, model:string, year:string,imageUrl:string):boolean {
    let addCar:ICar;
    addCar=new NewCar(make,model,year,imageUrl);
    this._carAPIService.addCarDetails(addCar)
    .subscribe(carsData =>
      { this.carsData = carsData}
    );

    return false;
  }

  refreshCars(){
    this.getCars();
  }
}
