INSERT INTO drinks (description,img, name,price,type)
VALUES ("Vino Bianco Pratto Cà dei Frati fruttato e delicato, ottimo per i piatti a base di pesce", 'https://data.negoziodelvino.it/imgprodotto/vino-bianco-pratto_4484.jpg', 'Pratto Cà dei Frati',35,'bianco'),
("vinoo rosso", 'https://www.colderove.it/932-thickbox_default/rosso-di-casa-mia.jpg', 'Fanta',23,'analcolica'),
 ("Forte", 'https://www.colderove.it/932-thickbox_default/rosso-di-casa-mia.jpg', 'Vino rosso',33,'rosso');



 INSERT INTO foods (description,img, name,price,type)
 VALUES ("Spaghetti con Polpa di Ricci con datterino rosso marinato", 'http://cdn.cook.stbm.it/thumbnails/ricette/119/119317/hd750x421.jpg', 'Spaghetti con Polpa di Ricci',15,'Primo'),
 ("Crudo di Adriatico accompagnato con emulsione di limoni di Sorrento", 'https://www.italiangourmet.it/media/2020/09/ADM8024.jpg', 'Frutti di Mare',20,'Antipasto'),
 ("Filetto di  ombrina in crema di patate e chips di  cavolo viola accompagnato con una crema a base di olive taggiasche", 'https://www.bellavitainbasilicata.it/Content/images/partner/4211/1920x0/e3ffc1ff83a30dc279cacd8886e5e17d.jpg', 'Filetto di Ombrina',20,'Secondo'),
  ("Tortino di frutti di bosco come crema chantilly  polvere di cocco e caramello salato", 'https://hiddencitysecrets.com.au/wp-content/uploads/2019/11/DeerDuckBistro-Bar-Restaurant-Restaurants-Sydney-Dining-Best-Top-Good-Desserts-4.jpg', 'Delizie del Bosco',10,'Dessert');


INSERT INTO tabella(name)
 VALUE('Le Rose'),('Girasole'),('Tulipani'),('Ciclamino');


INSERT INTO ordini(is_payed,local_date,seats,table_id)
 VALUE(1,'2022-01-01',1,1),(1,'2022-11-11',1,2),(1,'2022-03-18',1,1),(1,'2022-08-15',1,3);


 INSERT INTO food_has_order(food_id,order_id) VALUE(1,1),(2,1),(2,1),(3,1);

 INSERT INTO drinks_has_order(drink_id,order_id) VALUE(1,1),(2,1),(2,1),(3,1);




