import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpendialogComponent } from '../opendialog/opendialog.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  


  constructor(private matDialog:MatDialog ) { 
  }
  
  openDialog(){
    this.matDialog.open(OpendialogComponent,{
      width:'350px'
    })
  }

  ngOnInit(): void {
  }

}
