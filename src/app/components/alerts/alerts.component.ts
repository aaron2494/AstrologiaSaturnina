import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

alertError(){
  Swal.fire({
    title: 'Error!',
    text: 'campos invalidos',
    icon: 'error',
    confirmButtonText: 'Cool'
  })
}
alertSucces(){
  Swal.fire({
    title: 'Error!',
    text: 'campos validos',
    icon: 'success',
    confirmButtonText: 'Cool'
  })
}


}
