Swagger dokumentation: 
https://safe-earth-46365.herokuapp.com/docs/

Følgende bruger kan bruges til at teste authorization

Admin (skift roller)
{
  "username": "admin",
  "password": "admin"
}

Manager (se hoteller, tilføj værelser og hoteller)
{
  "username": "manager",
  "password": "manager"
}

Guest (ingen specifik funktionalitet implementeret)
{
  "username": "guest",
  "password": "guest"
}

User (Se ledige værelser for hotel)
{
  "username": "user",
  "password": "user"
}

Ikke alle brugers passwords er krypteret da dette først blev implementeret efter en del af dataen var blevet seeded.
Man kan logge ind uanset om en brugers password er krypteret eller ej.


 