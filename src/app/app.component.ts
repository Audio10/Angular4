import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzisquare'
  lugares:any = [
    {active: true, nombre: "Floreria la Gardenia"},
    {active: true, nombre: "Donas la pasadita"},
    {active: true, nombre: "Veterinaria huellas"},
    {active: false, nombre: "Floreria la Gardenia"},
    {active: false, nombre: "Donas la pasadita"},
    {active: false, nombre: "Veterinaria huellas"}
  ]
  lat = 51.678418;
  lng = 7.809007;

  constructor(){
  }

}