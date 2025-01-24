package Erdison.Dosti.Ristorante.Repository;

import Erdison.Dosti.Ristorante.Entity.Drinks;
import Erdison.Dosti.Ristorante.Entity.Foods;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FoodsRepository extends JpaRepository<Foods,Integer> {
    List<Foods> findByTypeContainingIgnoreCaseOrNameContainingIgnoreCase(String type,String name);
    List<Foods> findByType(String type);
}
