import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-add-ticket',
  standalone: false,
  templateUrl: './add-ticket.component.html',
  styleUrl: './add-ticket.component.css'
})

export class AddTicketComponent implements OnInit{

    ruteroId:any;
    nombre:any;

  ticket:any={
    gasolina:0.0,
    monto:0.0,
    precio:0.0,
    descuento:0.0,
    tasaBCV:0.0,
    total:0.0,
    volLunes:0.0,
    volMartes:0.0,
    volMiercoles:0.0,
    volJueves:0.0,
    volViernes:0.0,
    usuario:{}
  }
   
    constructor(private ticketService:TicketService,
      private usuarioService:UsuarioService,
      private snack:MatSnackBar,
      private route:ActivatedRoute,
      private router:Router){}

      ngOnInit(): void {
        this.ruteroId = this.route.snapshot.params['id'];
        this.nombre = this.route.snapshot.params['nombre'];
        this.ticket.usuario['usuarioId'] = this.ruteroId;
      }

    guardarTicket(){
      this.ticketService.agregarTicket(this.ticket).subscribe(
        (data)=>{
          Swal.fire('ticket agregado', 'El ticket se a agregado con exito','success');
          this.router.navigate(['/listUsuario']);
        },
        (error)=>{
          console.log(error);
          Swal.fire('Error !!','Error al guardar el ticket','error')
        }
      )
    }
  }