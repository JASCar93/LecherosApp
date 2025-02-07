import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-registrar',
  standalone: false,
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})

export class RegistrarComponent implements OnInit{

  usuario={
    nombre:'',
    apellido:''
  }

  constructor(private usuarioServicio:UsuarioService,private snack:MatSnackBar,private router:Router){}

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.usuario.nombre.trim()==''||this.usuario.nombre==null){
      this.snack.open("El titulo es requerido !!",'',{
        duration:3000
      })
      return ;
    }
    this.usuarioServicio.agregarUsuario(this.usuario).subscribe(
      (dato:any)=>{
        this.usuario.nombre='';
        this.usuario.apellido='';
        Swal.fire('Usuario agregado', 'El usuario se a agregado con exito','success');
        this.router.navigate(['/listUsuario']);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Error al guardar el usuario','error')
      }
    )
  }
}