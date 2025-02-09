#  Avvio del Microservizio e Popolamento del Database

##  Prerequisiti
Prima di avviare il microservizio, assicurati di avere installati:
- **Java 17+**
- **MySQL Server**
- **Maven**

## ⚙ Configurazione del Database
Prima di avviare il microservizio, configura il database MySQL:


Poi, assicurati che le credenziali di accesso al database siano corrette nel file `application.properties`:
server.port=8080
spring.datasource.url=jdbc:mysql://${MYSQL_HOST:localhost}:3306/projectwork
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.hibernate.ddl-auto=update
spring.jpa.defer-datasource-initialization=true
logging.level.root=INFO
```

## Avvio del Microservizio
Per avviare il microservizio, eseguire i seguenti comandi:

1. **Clona il repository**
   git clone https://github.com/erdifree/Project-work.git
   cd Project-work
2. **Avvia il server MySQL** (se non è già in esecuzione)

3. **Avvia il microservizio**

Il servizio sarà disponibile su `http://localhost:8080`.

## Popolamento Automatico del Database
Il database viene popolato automaticamente con dati di esempio alla prima esecuzione grazie allo script SQL predefinito  sql.data. 
Se vuoi **forzare il popolamento** manualmente, aggiungi questa linea nel file `application.properties` e riavvia il servizio:
spring.sql.init.mode=always
Dati di esempio inseriti:
- **Drinks:** Pratto Cà dei Frati, Fanta, Vino Rosso
- **Foods:** Spaghetti con Polpa di Ricci, Frutti di Mare, Filetto di Ombrina, Delizie del Bosco
- **Tables:** Le Rose, Girasole, Tulipani, Ciclamino
- **Orders:** Ordini associati ai tavoli

## Verifica del Database
Dopo l'avvio, puoi verificare che il database sia popolato eseguendo:
SELECT * FROM drinks;
SELECT * FROM foods;
SELECT * FROM tabella;
SELECT * FROM ordini;

✅ Il microservizio è ora avviato e il database è pronto all'uso e il test delle API!
