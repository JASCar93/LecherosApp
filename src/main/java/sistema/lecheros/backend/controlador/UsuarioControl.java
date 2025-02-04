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

import sistema.lecheros.backend.modelo.Usuario;
import sistema.lecheros.backend.repositorio.UsuarioRepositorio;




@RestController
@RequestMapping("/usuario")
@CrossOrigin("*")
public class UsuarioControl {
	
	@Autowired
	private UsuarioRepositorio usuarioRepositorio;
	
	@GetMapping("/")
	public ResponseEntity<?> listarUsuario() {
		return ResponseEntity.ok(usuarioRepositorio.findAll());
	}

	@GetMapping("/{usuarioId}")
	public Usuario buscarUsuario(@PathVariable("usuarioId") Long usuarioId) {
		return usuarioRepositorio.findById(usuarioId).get();
	}

	@PostMapping("/")
	public ResponseEntity<Usuario> guardarUsuario(@RequestBody Usuario usuario) {
		Usuario usuarioGuardado = usuarioRepositorio.save(usuario);
		return ResponseEntity.ok(usuarioGuardado);
	}
		
	@PutMapping("/")
	public Usuario actualizarUsuario(@RequestBody Usuario usuario){
		return usuarioRepositorio.save(usuario);
	}
	
	@DeleteMapping("/{usuarioId}")
	public void eliminarUsuario(@PathVariable("usuarioId") Long usuarioId) {
		usuarioRepositorio.deleteById(usuarioId);
	}

}
