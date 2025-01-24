package Erdison.Dosti.Ristorante.DTO;

import Erdison.Dosti.Ristorante.Entity.Drinks;
import Erdison.Dosti.Ristorante.Entity.Foods;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public  class OrderDTO  {

    private int id;
    private LocalDateTime localDateTime;
    private int seats;
    private List<Foods> food_id;
    private List<Drinks> drink_id;
    private boolean payed;

    private int table_id;

/*Costructor*/
  

    public  OrderDTO() {
    }
/*Get &  Set*/
    public boolean isPayed() {
        return payed;
    }

    public void setPayed(boolean payed) {
        this.payed = payed;
    }

    public int getTable_id() {
        return table_id;
    }

    public void setTable_id(int table_id) {
        this.table_id = table_id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDateTime getLocalDateTime() {
        return localDateTime;
    }

    public void setLocalDateTime(LocalDateTime localDateTime) {
        this.localDateTime = localDateTime;
    }

    public int getSeats() {
        return seats;
    }

    public void setSeats(int seats) {
        this.seats = seats;
    }

    public List<Foods> getFood_id() {
        return food_id;
    }

    public void setFood_id(List<Foods> food_id) {
        this.food_id = food_id;
    }

    public List<Drinks> getDrink_id() {
        return drink_id;
    }

    public void setDrink_id(List<Drinks> drink_id) {
        this.drink_id = drink_id;
    }

    /*Overrride of equals and hashCode method from Object JDK*/
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof OrderDTO orderDTO)) return false;

        if (isPayed() != orderDTO.isPayed()) return false;
        return getTable_id() == orderDTO.getTable_id();
    }

    @Override
    public int hashCode() {
        int result = (isPayed() ? 1 : 0);
        result = 31 * result + getTable_id();
        return result;
    }
}
