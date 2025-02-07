import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { TicketService } from '../../services/ticket.service';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ticket',
  standalone: false,
  
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  displayedColumns: string[] = ['id','nombre', 'monto', 'gasolina', 'tasabcv', 'descuento', 'total', 'precio', "actions"];
  ticket:any=[]
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort;

  constructor(private ticketServicio:TicketService, private snack:MatSnackBar){}

  ngOnInit(): void {
    this.ticketServicio.listarTicket().subscribe(
      (dato:any) => {
        this.ticket = new MatTableDataSource(dato);
        this.ngAfterViewInit();
        console.log(this.ticket);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al cargar los usuarios','error');
      }
    )
  }

  ngAfterViewInit(): void {
    this.ticket.paginator = this.paginator;
    this.ticket.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.ticket.filter = filterValue.trim().toLowerCase();

    if (this.ticket.paginator) {
      this.ticket.paginator.firstPage();
    }
  }

  edit(e:any){
    e.editable =! e.editable;
  }

  showEditAction(key: string) { return key == 'id' || key == 'nombre' }

  actualizarTicket(Usuario:any){
    this.ticketServicio.actualizarTicket(Usuario).subscribe(
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
  eliminarUsuario(ticketId:any){
    Swal.fire({
      title:'Eliminar Usuario',
      text:'Estas seguro?, quiere eliminar este usuario',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((resultado)=>{
      if(resultado.isConfirmed){
        this.ticketServicio.eliminarTicket(ticketId).subscribe(
          (data)=>{
            this.snack.open('Usuario eliminada','',{duration:3000})
            const index = this.ticket.data.indexOf(ticketId);
            this.ticket.data.splice(index,1);
            this.ticket._updateChangeSubscription();
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