CREATE TABLE "owner" (
    "id" INT NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL
);
CREATE TABLE "pet" (
    "id" integer NOT NULL,
    "name" VARCHAR(75) NOT NULL,
    "breed" VARCHAR(75) NOT NULL,
    "color" VARCHAR(100) NOT NULL,
    "is_checked_in" boolean DEFAULT true NOT NULL,
    "owner_id" integer NOT NULL
);

CREATE TABLE "history" (
    "id" integer NOT NULL,
    "check_in_date" DATE DEFAULT CURRENT_DATE NOT NULL,
    "check_out_date" DATE,
    "pet_id" integer NOT NULL
);

INSERT INTO "owner" ("first_name", "last_name") 
VALUES ('Hailee', 'Miu'), ('Meagan', 'Ortiz'), ('Shelly', 'Ropp');

INSERT INTO "pet" ("name", "breed", "color", "owner_id") 
VALUES ('Bandit', 'short hair cat', 'black and white', 1), ('Gibson', 'Yorkie', 'white with gray undercoat', 1)('Torvald', 'Russian Blue', 'gray with blue eyes', 2), ('Lucy', 'Pitbull mix', 'brindle', 3);

INSERT INTO "history" ("check_in_date", "check_out_date", "pet_id")
VALUES
