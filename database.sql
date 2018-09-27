-- --
-- -- PostgreSQL database dump
-- --

-- -- Dumped from database version 10.5
-- -- Dumped by pg_dump version 10.5

-- SET statement_timeout = 0;
-- SET lock_timeout = 0;
-- SET idle_in_transaction_session_timeout = 0;
-- SET client_encoding = 'UTF8';
-- SET standard_conforming_strings = on;
-- SELECT pg_catalog.set_config('search_path', '', false);
-- SET check_function_bodies = false;
-- SET client_min_messages = warning;
-- SET row_security = off;

-- SET default_tablespace = '';

-- SET default_with_oids = false;

-- --
-- -- Name: pet; Type: TABLE; Schema: public; Owner: haileemiu
-- --

-- CREATE TABLE public.pet (
--     id integer NOT NULL,
--     name character varying(75) NOT NULL,
--     breed character varying(75) NOT NULL,
--     color character varying(100) NOT NULL,
--     checkin_status boolean DEFAULT false,
--     owner_id integer
-- );


-- ALTER TABLE public.pet OWNER TO haileemiu;

-- --
-- -- Name: pet_id_seq; Type: SEQUENCE; Schema: public; Owner: haileemiu
-- --

-- CREATE SEQUENCE public.pet_id_seq
--     AS integer
--     START WITH 1
--     INCREMENT BY 1
--     NO MINVALUE
--     NO MAXVALUE
--     CACHE 1;


-- ALTER TABLE public.pet_id_seq OWNER TO haileemiu;

-- --
-- -- Name: pet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: haileemiu
-- --

-- ALTER SEQUENCE public.pet_id_seq OWNED BY public.pet.id;


-- --
-- -- Name: pet id; Type: DEFAULT; Schema: public; Owner: haileemiu
-- --

-- ALTER TABLE ONLY public.pet ALTER COLUMN id SET DEFAULT nextval('public.pet_id_seq'::regclass);


-- --
-- -- Name: pet pet_pkey; Type: CONSTRAINT; Schema: public; Owner: haileemiu
-- --

-- ALTER TABLE ONLY public.pet
--     ADD CONSTRAINT pet_pkey PRIMARY KEY (id);


-- --
-- -- Name: pet pet_owner_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: haileemiu
-- --

-- ALTER TABLE ONLY public.pet
--     ADD CONSTRAINT pet_owner_id_fkey FOREIGN KEY (owner_id) REFERENCES public.owner(id);


--
-- PostgreSQL database dump complete
--
---
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

INSERT INTO "owner" ("first_name", "last_name")
VALUES ('Hailee', 'Miu'), ('Nikko', 'Miu'), ('Meagan', 'Ortiz');


INSERT INTO "pet" ("name", "breed", "color", "owner_id") 
VALUES 
('Bandit', 'short hair cat', 'black', 1), 
('Taurus', 'short hair cat', 'black and big', 1),
('Zelda', 'hunting dog', 'brown', 1), 
('Lucy', 'pitbull', 'brindel', 3),
('Gibson', 'yorkie', 'white with black spots', 3), 
('Beni', 'Australian cattle dog', 'salt and pepper', 3), 
('Binki', 'old cat', 'mixed mostly black', 3);



-- Get owner id, first name, last name, number of pets they have. 
SELECT "owner".*, COUNT("pet") as "number_of_pets"
FROM "owner" 
JOIN "pet" 
ON "owner"."id" = "pet"."owner_id"
GROUP BY "owner"."id";

-- Get pet info with owner desired info
SELECT 
"pet"."id" as "pet_id", "pet"."name" as "pet_name", "pet"."breed", "pet"."color", "pet"."is_checked_in", "owner"."id" as "owner_id", "owner"."first_name"
FROM "pet" 
JOIN "owner"
ON "pet"."owner_id" = "owner"."id";


-- toggle is checked in
UPDATE "pet" SET "is_checked_in" = NOT "is_checked_in" WHERE "id" = 2;
