package sistema.lecheros.backend.controlador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sistema.lecheros.backend.modelo.Ticket;
import sistema.lecheros.backend.repositorio.ticketRepositorio;


@RestController
@RequestMapping("/ticket")
@CrossOrigin("*")
public class ticketControl {

	@Autowired
	private ticketRepositorio ticketRepositorio;
	
	@GetMapping("/")
	public ResponseEntity<?> listarTicket() {
		return ResponseEntity.ok(ticketRepositorio.findAll());
	}

	@GetMapping("/{ticketId}")
	public Ticket buscarTicket(@PathVariable("ticketId") Long ticketId) {
		return ticketRepositorio.findById(ticketId).get();
	}

	@PostMapping("/")
	public ResponseEntity<Ticket> guardarTicket(@RequestBody Ticket ticket) {
		return ResponseEntity.ok(ticketRepositorio.save(ticket));
	}
		
	@PutMapping("/")
	public Ticket actualizarTicket(@RequestBody Ticket ticket){
		return ticketRepositorio.save(ticket);
	}
	
	@DeleteMapping("/{ticketId}")
	public void eliminarTicket(@PathVariable("ticketId") Long ticketId) {
		ticketRepositorio.deleteById(ticketId);
	}
}