import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';

interface componente {
icon:string;
name: string;
redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  //crear nuevo listado
//componentes: any[] = [];
componentes: componente [] = [
  {
  icon: 'american-football-outline',
  name: 'Accion',
  redirectTo: '/accion'
  },
  {
  icon: 'logo-apple-appstore',
  name: 'Alerta',
  redirectTo: '/alert'
  },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
