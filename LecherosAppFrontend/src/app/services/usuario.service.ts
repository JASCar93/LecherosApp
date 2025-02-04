import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  public listarUsuario(){
    return this.http.get(`${baserUrl}/usuario/`);
  }

  public agregarUsuario(usuario:any){
    return this.http.post(`${baserUrl}/usuario/`,usuario);
  }

  public actualizarUsuario(usuario:any){
    return this.http.put(`${baserUrl}/usuario/`,usuario);
  }
  
  public eliminarUsuario(usuario:any){
    return this.http.delete(`${baserUrl}/usuario/${usuario}`);
  }
}
