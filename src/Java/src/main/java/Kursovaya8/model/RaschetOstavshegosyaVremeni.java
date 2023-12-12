package Kursovaya8.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya8.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: РасчетОставшегосяВремени
 */
@Entity(name = "IISKursovaya8РасчетОставшегосяВремени")
@Table(schema = "public", name = "РасчетОставшегосяВремени")
public class RaschetOstavshegosyaVremeni {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Использовано")
    private Integer использовано;

    @Column(name = "Доступно")
    private Integer доступно;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RastorzhenieDogovora")
    @Convert("RastorzhenieDogovora")
    @Column(name = "РасторжениеДоговора", length = 16, unique = true, nullable = false)
    private UUID _rastorzheniedogovoraid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RastorzhenieDogovora", insertable = false, updatable = false)
    private RastorzhenieDogovora rastorzheniedogovora;

    @OneToMany(mappedBy = "raschetostavshegosyavremeni", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<OkazanieKonsultacij> okazaniekonsultacijs;


    public RaschetOstavshegosyaVremeni() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getИспользовано() {
      return использовано;
    }

    public void setИспользовано(Integer использовано) {
      this.использовано = использовано;
    }

    public Integer getДоступно() {
      return доступно;
    }

    public void setДоступно(Integer доступно) {
      this.доступно = доступно;
    }


}