CREATE TABLE "owner" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL
);
CREATE TABLE "pet" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "name" VARCHAR(75) NOT NULL,
    "breed" VARCHAR(75) NOT NULL,
    "color" VARCHAR(100) NOT NULL,
    "is_checked_in" boolean DEFAULT true NOT NULL,
    "owner_id" integer NOT NULL
);

CREATE TABLE "history" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "check_in_date" DATE DEFAULT CURRENT_DATE NOT NULL,
    "check_out_date" DATE,
    "pet_id" integer NOT NULL
);

INSERT INTO "owner" ("first_name", "last_name") 
VALUES ('Hailee', 'Miu'), ('Meagan', 'Ortiz'), ('Shelly', 'Ropp');

INSERT INTO "pet" ("name", "breed", "color", "owner_id") 
VALUES ('Bandit', 'short hair cat', 'black and white', 1), ('Gibson', 'Yorkie', 'white with gray undercoat', 1), ('Torvald', 'Russian Blue', 'gray with blue eyes', 2), ('Lucy', 'Pitbull mix', 'brindle', 3);

INSERT INTO "history" ("check_in_date", "check_out_date", "pet_id")
VALUES ('2018-01-01', '2018-01-15', 1);

INSERT INTO "history" ("check_in_date", "pet_id")
VALUES ('2018-01-01', '2018-01-15', 3);

INSERT INTO "history" ("check_in_date", "pet_id")
VALUES ('2018-09-15', 3);

INSERT INTO "history" ("check_in_date", "pet_id")
VALUES ('2018-09-20', 4);
