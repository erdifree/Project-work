package Erdison.Dosti.Ristorante.Repository;

import Erdison.Dosti.Ristorante.Entity.Drinks;
import Erdison.Dosti.Ristorante.Entity.Foods;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface DrinksRepository extends JpaRepository<Drinks,Integer> {
    List<Drinks>findByTypeContainingIgnoreCaseOrNameContainingIgnoreCase(String type,String name);
    List<Drinks> findByType(String type);
}
