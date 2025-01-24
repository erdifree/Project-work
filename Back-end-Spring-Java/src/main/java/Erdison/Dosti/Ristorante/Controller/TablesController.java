package Erdison.Dosti.Ristorante.Controller;

import Erdison.Dosti.Ristorante.Entity.Tables;
import Erdison.Dosti.Ristorante.Repository.TableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api1/tables")
@CrossOrigin
public class TablesController {
    @Autowired
    TableRepository tableRepository;
@GetMapping
    public List<Tables> get(){
    return tableRepository.findAll();
}


    @GetMapping("/{id}")
    public Tables getTable(@PathVariable Integer id){
        Optional<Tables> result= tableRepository.findById(id);
        if (result.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }else{
            return result.get();
        }

    }
}
