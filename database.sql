CREATE TABLE "owner" (
	"id" SERIAL PRIMARY KEY, 
	"name" VARCHAR(100) NOT NULL
);

CREATE TABLE "pet" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(75) NOT NULL,
	"breed" VARCHAR(75) NOT NULL,
	"color" VARCHAR(100) NOT NULL,
	"checkin_status" BOOLEAN DEFAULT FALSE, 
	"owner_id" INT REFERENCES "owner"
);

INSERT INTO "owner" ("name")
VALUES ('Hailee');

INSERT INTO "owner" ("name")
VALUES ('Nikko');

INSERT INTO "owner" ("name")
VALUES ('Shelly');

INSERT INTO "pet" ("name", "breed", "color", "owner_id") 
VALUES ('Bandit', 'short hair cat', 'black', 1);

INSERT INTO "pet" ("name", "breed", "color", "owner_id") 
VALUES ('Taurus', 'short hair cat', 'black and big', 1);

INSERT INTO "pet" ("name", "breed", "color", "owner_id") 
VALUES ('Zelda', 'hunting dog', 'brown', 1);

INSERT INTO "pet" ("name", "breed", "color", "owner_id") 
VALUES ('Lucy', 'pitbull', 'brindel', 3);

INSERT INTO "pet" ("name", "breed", "color", "owner_id") 
VALUES ('Gibson', 'yorkie', 'white with black spots', 3);

INSERT INTO "pet" ("name", "breed", "color", "owner_id") 
VALUES ('Beni', 'Australian cattle dog', 'salt and pepper', 3);

INSERT INTO "pet" ("name", "breed", "color", "owner_id") 
VALUES ('Binki', 'old cat', 'mixed mostly black', 3);