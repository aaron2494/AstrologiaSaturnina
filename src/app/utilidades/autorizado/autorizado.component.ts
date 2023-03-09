import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/servicios/cartas.service';

@Component({
  selector: 'app-autorizado',
  templateUrl: './autorizado.component.html',
  styleUrls: ['./autorizado.component.css']
})
export class AutorizadoComponent implements OnInit {

  constructor(private apiService:ApiserviceService) { }

  ngOnInit(): void {
  }

  estaAutorizado(): boolean{
    return this.apiService.estaLogueado()
  }

}
