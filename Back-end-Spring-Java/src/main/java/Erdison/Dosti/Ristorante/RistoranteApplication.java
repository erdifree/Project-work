package Erdison.Dosti.Ristorante;


import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;

@SpringBootApplication
public class RistoranteApplication {

	public static void main(String[] args) {
		SpringApplication.run(RistoranteApplication.class, args);
	}
/*@Bean
	CommandLineRunner run(UserService userService){
		return  args -> {
		userService.saveRole( new Role( null, "ROLE_USER"));
		userService.saveRole( new Role( null, "ROLE_ADMIN"));

		userService.saveUser( new User( null,"Erdsion dosti", "erdi", "1234",new ArrayList<>()));
		userService.saveUser( new User( null,"Carla Colaianni", "carla", "1234",new ArrayList<>()));

		userService.addRoleToUser("erdi","ROLE_USER");
		userService.addRoleToUser("carla","ROLE_ADMIN");
		};
	}*/
}
