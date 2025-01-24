package Erdison.Dosti.Ristorante.Controller;


import Erdison.Dosti.Ristorante.Entity.Drinks;
import Erdison.Dosti.Ristorante.Entity.Foods;
import Erdison.Dosti.Ristorante.Repository.FoodsRepository;
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
@RequestMapping("/api1/foods")
@CrossOrigin
public class FoodsController {

    @Autowired
    FoodsRepository foodsRepository;
    @GetMapping
    public List<Foods> getDishByType(@RequestParam(name="type",required = false)String str) {
        if(Strings.isBlank(str)){
            return foodsRepository.findAll();
        }else{
            return foodsRepository.findByTypeContainingIgnoreCaseOrNameContainingIgnoreCase(str,str);
        }
    }
    @GetMapping("/category")
    public List<Foods> getByType(@RequestParam(name="type",required = false)String str) {
        if(Strings.isBlank(str)){
            return foodsRepository.findAll();
        }else{
            return foodsRepository.findByType(str);
        }
    }
    @PostMapping
    public Boolean createDish(@Valid @RequestBody Foods food) {
        Optional<Foods> result= foodsRepository.findById(food.getId());
        if (result.isEmpty()){
            foodsRepository.save(food);
        }else{
            throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE,("Dish not correct"));
        }
        return true;
    }
    @PutMapping("/{id}")
    public ResponseEntity<Object> updateDish(@PathVariable Integer id,@Valid @RequestBody Foods food ) {
        Optional<Foods> result= foodsRepository.findById(id);
        if(!result.isEmpty()){
            food.setId(id);
            foodsRepository.save(food);
        }else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Dish Not Found");
        }
        return ResponseEntity.ok("Dish updated");
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deliteDish(@PathVariable Integer id){
        Optional<Foods> result= foodsRepository.findById(id);
        if(!result.isEmpty()){
            foodsRepository.delete(result.get());
        }else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Dish Not Found");
        }
        return ResponseEntity.ok("Dish deleted");
    }

}
