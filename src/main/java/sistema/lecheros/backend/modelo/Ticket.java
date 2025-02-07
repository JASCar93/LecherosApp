package sistema.lecheros.backend.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "ticket")
public class Ticket {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long ticketId;
    private Double gasolina;
    private Double monto;
    private Double precio;
    private Double descuento;
    private Double tasaBCV;
    private Double total;
    private Double volLunes;
    private Double volMartes;
    private Double volMiercoles;
    private Double volJueves;
    private Double volViernes;
    
    @ManyToOne(fetch = FetchType.EAGER)
    private Usuario usuario;

	public Ticket() {
	}

	public Ticket(Long ticketId, Double gasolina, Double monto, Double precio, Double descuento, Double tasaBCV,
			Double total, Double volLunes, Double volMartes, Double volMiercoles, Double volJueves, Double volViernes,
			Usuario usuario) {
		this.ticketId = ticketId;
		this.gasolina = gasolina;
		this.monto = monto;
		this.precio = precio;
		this.descuento = descuento;
		this.tasaBCV = tasaBCV;
		this.total = total;
		this.volLunes = volLunes;
		this.volMartes = volMartes;
		this.volMiercoles = volMiercoles;
		this.volJueves = volJueves;
		this.volViernes = volViernes;
		this.usuario = usuario;
	}

	public Long getTicketId() {
		return ticketId;
	}

	public void setTicketId(Long ticketId) {
		this.ticketId = ticketId;
	}

	public Double getGasolina() {
		return gasolina;
	}

	public void setGasolina(Double gasolina) {
		this.gasolina = gasolina;
	}

	public Double getMonto() {
		return monto;
	}

	public void setMonto(Double monto) {
		this.monto = monto;
	}

	public Double getPrecio() {
		return precio;
	}

	public void setPrecio(Double precio) {
		this.precio = precio;
	}

	public Double getDescuento() {
		return descuento;
	}

	public void setDescuento(Double descuento) {
		this.descuento = descuento;
	}

	public Double getTasaBCV() {
		return tasaBCV;
	}

	public void setTasaBCV(Double tasaBCV) {
		this.tasaBCV = tasaBCV;
	}

	public Double getTotal() {
		return total;
	}

	public void setTotal(Double total) {
		this.total = total;
	}

	public Double getVolLunes() {
		return volLunes;
	}

	public void setVolLunes(Double volLunes) {
		this.volLunes = volLunes;
	}

	public Double getVolMartes() {
		return volMartes;
	}

	public void setVolMartes(Double volMartes) {
		this.volMartes = volMartes;
	}

	public Double getVolMiercoles() {
		return volMiercoles;
	}

	public void setVolMiercoles(Double volMiercoles) {
		this.volMiercoles = volMiercoles;
	}

	public Double getVolJueves() {
		return volJueves;
	}

	public void setVolJueves(Double volJueves) {
		this.volJueves = volJueves;
	}

	public Double getVolViernes() {
		return volViernes;
	}

	public void setVolViernes(Double volViernes) {
		this.volViernes = volViernes;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
}