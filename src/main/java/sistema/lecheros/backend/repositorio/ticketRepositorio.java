package sistema.lecheros.backend.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import sistema.lecheros.backend.modelo.Ticket;

public interface ticketRepositorio extends JpaRepository<Ticket, Long> {

}
