//usuarios del sistema, empleados de la empresa que realizan gestiones sobre el mismo

package Logica;

import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
public class Usuario extends Persona{
    
    @Basic
    private String contraseña;
    private String cargo;
   
    @Temporal(TemporalType.DATE)
    private Date fechaNacimiento;
    
    @OneToOne (cascade = CascadeType.PERSIST)
    @JoinColumn
    private TipoDeUsuario tipoUsuario;

    public Usuario() {
    }

    public Usuario(String contraseña, String cargo, Date fechaNacimiento, TipoDeUsuario tipoUsuario) {
        this.contraseña = contraseña;
        this.cargo = cargo;
        this.fechaNacimiento = fechaNacimiento;
        this.tipoUsuario = tipoUsuario;
    }

    public Usuario(String contraseña, String cargo, Date fechaNacimiento, TipoDeUsuario tipoUsuario, int idPersona, String nombre, String apellido, String telefono, String email, String direccion, String provincia) {
        super(idPersona, nombre, apellido, telefono, email, direccion, provincia);
        this.contraseña = contraseña;
        this.cargo = cargo;
        this.fechaNacimiento = fechaNacimiento;
        this.tipoUsuario = tipoUsuario;
    }

    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public TipoDeUsuario getTipoUsuario() {
        return tipoUsuario;
    }

    public void setTipoUsuario(TipoDeUsuario tipoUsuario) {
        this.tipoUsuario = tipoUsuario;
    }
  
    
}
