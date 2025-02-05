import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { UsuarioService } from '../../services/usuario.service';
import  Swal  from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { error } from 'console';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-usuario',
  standalone: false,
  templateUrl: './list-usuario.component.html',
  styleUrl: './list-usuario.component.css'
})
export class ListUsuarioComponent implements AfterViewInit {
  displayedColumns: string[] = ['id','nombre', 'apellido', "actions"];
  usuario:any=[]
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort;

  constructor(private usuarioServicio:UsuarioService, private snack:MatSnackBar){}

  ngOnInit(): void {
    this.usuarioServicio.listarUsuario().subscribe(
      (dato:any) => {
        this.usuario = new MatTableDataSource(dato);
        this.ngAfterViewInit();
        console.log(this.usuario);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al cargar los usuarios','error');
      }
    )
  }

  ngAfterViewInit(): void {
    this.usuario.paginator = this.paginator;
    this.usuario.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.usuario.filter = filterValue.trim().toLowerCase();

    if (this.usuario.paginator) {
      this.usuario.paginator.firstPage();
    }
  }

  edit(e:any){
    e.editable =! e.editable;
  }

  showEditAction(key: string) { return key == 'id' || key == 'nombre' }

  actualizarUsuario(Usuario:any){
    this.usuarioServicio.actualizarUsuario(Usuario).subscribe(
      (data)=>{
        Usuario.editable=!Usuario.editable;
        Swal.fire('Usuario actualizado','El usuario ha sido actualizado con exito','success');
      },
      (error)=>{
        Swal.fire('Error en el sistema','No se ha podido actualizar el usuario','error');
        console.log(error);
      }
    )
  }
  eliminarUsuario(usuarioId:any){
    Swal.fire({
      title:'Eliminar Usuario',
      text:'Estas seguro?, quiere eliminar este usuario',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((resultado)=>{
      if(resultado.isConfirmed){
        this.usuarioServicio.eliminarUsuario(usuarioId).subscribe(
          (data)=>{
            this.snack.open('Usuario eliminada','',{duration:3000})
            const index = this.usuario.data.indexOf(usuarioId);
            this.usuario.data.splice(index,1);
            this.usuario._updateChangeSubscription();
          },
          (error)=>{
            this.snack.open('Error al eliminar el usuario','',{duration:3000})
            console.log(error);
          }
        )
      }
    })

  }
}

