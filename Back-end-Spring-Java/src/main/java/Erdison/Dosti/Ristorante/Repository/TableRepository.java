package Erdison.Dosti.Ristorante.Repository;

import Erdison.Dosti.Ristorante.Entity.Foods;
import Erdison.Dosti.Ristorante.Entity.Tables;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TableRepository extends JpaRepository<Tables,Integer> {
}
