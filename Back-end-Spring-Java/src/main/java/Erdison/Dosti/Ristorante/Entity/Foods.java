package Erdison.Dosti.Ristorante.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.awt.*;
import java.util.Set;

@Entity
@Table
public class Foods {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int id;
    @NotBlank
    private String img;
    @NotBlank
    private String name;
    @NotBlank
    private String description;
    @NotNull
    private double price;

    @NotBlank
    private String type;



  @ManyToMany(mappedBy = "food_id")
    @JsonIgnore
    private Set<Orders> orders;

/*Get & Set*/

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Set<Orders> getOrders() {
        return orders;
    }

    public void setOrders(Set<Orders> orders) {
        this.orders = orders;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Foods foods)) return false;

        if (getId() != foods.getId()) return false;
        if (Double.compare(foods.getPrice(), getPrice()) != 0) return false;
        if (getImg() != null ? !getImg().equals(foods.getImg()) : foods.getImg() != null) return false;
        if (getName() != null ? !getName().equals(foods.getName()) : foods.getName() != null) return false;
        if (getDescription() != null ? !getDescription().equals(foods.getDescription()) : foods.getDescription() != null)
            return false;
        if (getType() != null ? !getType().equals(foods.getType()) : foods.getType() != null) return false;
        return getOrders() != null ? getOrders().equals(foods.getOrders()) : foods.getOrders() == null;
    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = getId();
        result = 31 * result + (getImg() != null ? getImg().hashCode() : 0);
        result = 31 * result + (getName() != null ? getName().hashCode() : 0);
        result = 31 * result + (getDescription() != null ? getDescription().hashCode() : 0);
        temp = Double.doubleToLongBits(getPrice());
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        result = 31 * result + (getType() != null ? getType().hashCode() : 0);
        result = 31 * result + (getOrders() != null ? getOrders().hashCode() : 0);
        return result;
    }
}
