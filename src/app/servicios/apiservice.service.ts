import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartaDTO, Cartas, RespuestaAutenticacion } from '../interfaces/respuesta';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  url = environment.baseUrl;
  token!:string

  constructor(private http:HttpClient) { }
  

  login(email:string, password:string):Observable<RespuestaAutenticacion>{
    return this.http.post<RespuestaAutenticacion>(`${this.url}/cuentas/login`, {email, password})
    .pipe(
      tap(resp =>{
        localStorage.setItem('token', resp.token)
      })
    )
  }

  getCartas():Observable<Cartas>{
    return this.http.get<Cartas>(`${this.url}/carta`)
  }

  editarCarta(id:number, carta:CartaDTO):Observable<CartaDTO>{
    return this.http.put<CartaDTO>(`${this.url}/carta?id=${id}`, carta)
  }
  
  getToken(){
    return localStorage.getItem('token')
  }
}
