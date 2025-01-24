package Erdison.Dosti.Ristorante.Repository;

import Erdison.Dosti.Ristorante.Entity.Foods;
import Erdison.Dosti.Ristorante.Entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface OrderRepository extends JpaRepository<Orders,Integer> {
    List<Orders> findByLocalDate(LocalDate date);
    List<Orders> findByIsPayed(boolean flag);

}
