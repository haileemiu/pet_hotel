
# API Outline
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
- 
Request: 
- 
Response: 
- 
Query:
```sql
```
### Delete
> An employee will be able to delete an owner ONLY IF they have now pets at the hotel. 

Route:
- 
Request: 
- 
Response: 
- 
Query:
```sql
```
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
- 
Request: 
- 
Response: 
- 
Query:
```sql
```
### Edit
> An employee will be able to check a pet out (check in is default when pet added). 
Route:
- 
Request: 
- 
Response: 
- 
Query:
```sql
```
### Delete
> An employee will be able to delete a pet from the hotel. 
Route:
- 
Request: 
- 
Response: 
- 
Query:
```sql
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

