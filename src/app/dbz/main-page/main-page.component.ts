import { Component, Input } from '@angular/core';
import { provideRoutes } from '@angular/router';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(){}

}
