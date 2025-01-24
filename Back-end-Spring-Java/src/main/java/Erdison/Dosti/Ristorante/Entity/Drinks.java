package Erdison.Dosti.Ristorante.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.awt.*;
import java.util.Set;

@Entity
@Table
public class Drinks {
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



    @ManyToMany(mappedBy = "drink_id")
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

   public Set<Orders> getOrders() {
        return orders;
    }

    public void setOrders(Set<Orders> orders) {
        this.orders = orders;
    }
}
