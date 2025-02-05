package sistema.lecheros.backend.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "ticket")
public class Ticket {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long idRutero;
    private Double gasolina;
    private Double monto;
    private Double precio;
    private Double descuento;
    private Double tasaBCV;
    private Double total;
    private Double volLunes;
    private Double volmartes;
    private Double volMiercoles;
    private Double volJueves;
    private Double volViernes;
	public Ticket() {
		super();
	}
	public Ticket(Long id, Long idRutero, Double gasolina, Double monto, Double precio, Double descuento,
			Double tasaBCV, Double total, Double volLunes, Double volmartes, Double volMiercoles, Double volJueves,
			Double volViernes) {
		super();
		this.id = id;
		this.idRutero = idRutero;
		this.gasolina = gasolina;
		this.monto = monto;
		this.precio = precio;
		this.descuento = descuento;
		this.tasaBCV = tasaBCV;
		this.total = total;
		this.volLunes = volLunes;
		this.volmartes = volmartes;
		this.volMiercoles = volMiercoles;
		this.volJueves = volJueves;
		this.volViernes = volViernes;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getIdRutero() {
		return idRutero;
	}
	public void setIdRutero(Long idRutero) {
		this.idRutero = idRutero;
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
	public Double getVolmartes() {
		return volmartes;
	}
	public void setVolmartes(Double volmartes) {
		this.volmartes = volmartes;
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
}
