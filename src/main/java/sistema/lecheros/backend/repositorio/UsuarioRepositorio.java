package sistema.lecheros.backend.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import sistema.lecheros.backend.modelo.Usuario;

public interface UsuarioRepositorio extends JpaRepository<Usuario, Long>{

}
