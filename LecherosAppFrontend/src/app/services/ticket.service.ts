import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }

  public listarTicket(){
    return this.http.get(`${baserUrl}/ticket/`);
  }

  public agregarTicket(ticket:any){
    return this.http.post(`${baserUrl}/ticket/`,ticket);
  }

  public actualizarTicket(ticket:any){
    return this.http.put(`${baserUrl}/ticket/`,ticket);
  }

  public eliminarTicket(ticket:any){
    return this.http.delete(`${baserUrl}/ticket/${ticket}`)
  }
}
