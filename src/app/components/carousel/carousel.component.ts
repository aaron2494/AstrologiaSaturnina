import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cartas } from 'src/app/interfaces/respuesta';
import { ApiserviceService } from 'src/app/servicios/apiservice.service';
import { OpendialogComponent } from '../opendialog/opendialog.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  cartas:Cartas[] = []
  
  ngOnInit(): void {
    this.getCartas()
  }

  constructor(private matDialog:MatDialog, private apiService:ApiserviceService ) { 
  }
  
  openDialog(){
    this.matDialog.open(OpendialogComponent,{
      width:'350px'
    })
  }

  getCartas(){
    this.apiService.getCartas().subscribe((data:any) =>{
      this.cartas = data 
      console.log(this.cartas)
    })
  }
 

}
