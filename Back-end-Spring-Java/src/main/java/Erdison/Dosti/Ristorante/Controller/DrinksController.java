package Erdison.Dosti.Ristorante.Controller;


import Erdison.Dosti.Ristorante.Entity.Drinks;
import Erdison.Dosti.Ristorante.Entity.Foods;
import Erdison.Dosti.Ristorante.Repository.DrinksRepository;
import jakarta.validation.Valid;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api1/drinks")
@CrossOrigin
public class DrinksController {

    @Autowired
   DrinksRepository drinksRepository;

    @GetMapping
    public List<Drinks> getDishByType(@RequestParam(name="type",required = false)String str) {
        if(Strings.isBlank(str)){
            return drinksRepository.findAll();
        }else{
            return drinksRepository.findByTypeContainingIgnoreCaseOrNameContainingIgnoreCase(str,str);
        }
    }

    @GetMapping("/category")
    public List<Drinks> getByType(@RequestParam(name="type",required = false)String str) {
        if(Strings.isBlank(str)){
            return drinksRepository.findAll();
        }else{
            return drinksRepository.findByType(str);
        }
    }


    @PostMapping
    public Boolean createDrink(@Valid @RequestBody Drinks drinks) {
        Optional<Drinks> result= drinksRepository.findById(drinks.getId());
        if (result.isEmpty()){
            drinksRepository.save(drinks);
        }else{
            throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE,("drink not correct"));
        }
        return true;
    }
    @PutMapping("/{id}")
    public ResponseEntity<Object> updateDrink(@PathVariable Integer id,@Valid @RequestBody Drinks drinks ) {
        Optional<Drinks> result= drinksRepository.findById(id);
        if(!result.isEmpty()){
          drinks.setId(id);
           drinksRepository.save(drinks);
        }else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Drink Not Found");
        }
        return ResponseEntity.ok("Drink updated");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deliteDrink(@PathVariable Integer id){
        Optional<Drinks> result= drinksRepository.findById(id);
        if(!result.isEmpty()){
            drinksRepository.delete(result.get());
        }else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Drink Not Found");
        }
        return ResponseEntity.ok("Drink deleted");
    }
}
