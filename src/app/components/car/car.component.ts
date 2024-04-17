import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CarApiService } from '../../services/car-api.service';
import { ICar } from '../../interfaces/car';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  @Input() car:any;
  carImageWidth:number=300;

  constructor(private _carAPIService: CarApiService){}

  @Output() carDeletedEvent = new EventEmitter<string>()
}
