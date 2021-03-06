# Extended Weekend Project
## Capstone to AngularJS

We had approximately 4 days to create full stack application for a pet hotel check-in system. Technolgies used: AngularJS, PostgresQL, Angular Material, Node, and Express.

----

# API Outline with user stories
## Owner view

### Display 

> An employee will be able to view the owners in the system & number of pets that have.

Route: 
- `/pet_hotel/owners`

Request: 
- GET
  - list of owners & # of pets they have

Response: 
- `[{ id, first_name, last_name, number_of_pets }]`  
  -  **NOTE: will have to as alias to router for `number_of_pets`.**

Query: 
```sql
SELECT "owner".*, COUNT("pet") as "number_of_pets"
FROM "owner" 
JOIN "pet" 
ON "owner"."id" = "pet"."owner_id"
GROUP BY "owner"."id";
```

### Add
> An employee will be able to add a new owner on check in (needs to be done before adding a new pet).  
Route:
- `/pet_hotel/owners`
Request: 
- POST
  - send: `[{ first_name, last_name}]`  
Response: 
- status: 201 created  
Query:
```sql
INSERT INTO "owner" ("first_name", "last_name") 
VALUES (${req.body.first_name}, ${req.body.last_name});
```
### Delete
> An employee will be able to delete an owner ONLY IF they have now pets at the hotel. 

Route:
- `/pet_hotel/owners`
Request: 
 DELETE
  - params: id
Response: 
- status 200 (success)
Query:
```sql
DELETE FROM "owner"
WHERE id=${req.params.id};
```
----
---
---
## Pet View

### Display 
> An employee will be able to view the pets at the hotel & whether they are checked in or out. 

Route:
- `pet_hotel/pets`
Request: 
- GET 
  - pets & owners

Response: 
  - `[{ id, pet_name, breed, color, is_checked_in, owner_id, owner_first_name }]`  
**NOTE: change name to pet_name and id to pet_id**
Query:
```sql
SELECT 
"pet"."id" as "pet_id", "pet"."name" as "pet_name", "pet"."breed", "pet"."color", "pet"."is_checked_in", "owner"."id" as "owner_id", "owner"."first_name"
FROM "pet" 
JOIN "owner"
ON "pet"."owner_id" = "owner"."id";
```

### Add
> An employee will be able to add a new pet to the hotel (including who their owner is).   

Route:
- `pet_hotel/pets`  
Request: 
- POST
  - send: `[{ "name", "color", "breed", "owner_id" }]`  
  **NOTE: owner_id**  
  Response: 
- status: 201 created    
Query:
```sql
INSERT INTO "pet" ("name", "color", "breed", "owner_id")
VALUES (${req.body.name}, ${req.body.color}, ${req.body.breed}, ${req.body.owner_id});
```

### Edit
> An employee will be able to check a pet out (check in is default when pet added). 
Route:
- `pet_hotel/pets`  
Request:   
- PUT  
  - `[{ "id", "is_checked_in" }]`  
Response:   
- status ok    
- ***Client side : call a get request again***     
Query:  
```sql
UPDATE "pet" SET "is_checked_in" = NOT "is_checked_in" WHERE "id"=${req.params.id}
```  
### Delete
> An employee will be able to delete a pet from the hotel. 
Route:
- `pets/:id`
Request: 
- DELETE
  - params: id
Response: 
- status 200 (success)
Query:
```sql
DELETE FROM "pet"
WHERE id=${req.params.id};
```
---
# Original Assignment Directions
# Pet Hotel Project

> NOTE: Do not fork this repository. Instead, create your own repository from scratch.

Trello Board: https://trello.com/b/1mJRBCmZ/pet-hotel-weekend-project

## Features

- Add owners
- Add pets
- Remove owners if no pets are assigned
- Remove pets
- Check in / out a pet
- Show total number of pet next to each owner

### Wireframes

#### Dashboard View

![Add Entry Page](page-one.png)

#### Manage Owners View

![Add Entry Page](page-two.png)

### Database

Start with two tables **pets** & **owners**. When base features are complete, add more tables as needed for stretch goals.

## Stretch goals

- Update pets and owners
- Keep track of visits (you may need another table or two for this)
- Add images for pets
- Angular Material for design

---

