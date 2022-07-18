insert into bi_user (id, name, created_by, updated_by)
values
('00000000-0000-0000-0000-000000000000', 'system', '00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000');

DO $$
DECLARE
    by_user_id UUID;
BEGIN

by_user_id := (SELECT id FROM bi_user WHERE name = 'system');

--Populate Users
INSERT INTO bi_user (orcid, name, email, created_by, updated_by, active) 
VALUES 
('0000-0001-5398-6158', 'Christian', 'christian@mailinator.com', by_user_id, by_user_id, true);

INSERT INTO bi_user (orcid, name, email, created_by, updated_by, active)
VALUES
('0000-0001-7266-4760', 'Cucumber Breeder', 'cucumberbreeder@mailinator.com', by_user_id, by_user_id, true);

INSERT INTO bi_user (orcid, name, email, created_by, updated_by, active) 
VALUES
('0000-0002-9869-7322', 'Cucumber Member', 'cucumbermember@mailinator.com', by_user_id, by_user_id, true);

INSERT INTO bi_user (orcid, name, email, created_by, updated_by, active)
VALUES 
('0000-0002-7046-0251', 'TrailMix Breeder', 'trailmix@mailinator.com', by_user_id, by_user_id, true);

INSERT INTO system_user_role (bi_user_id, system_role_id, created_by, updated_by) 
SELECT bi_user.id, system_role.id, by_user_id, by_user_id FROM bi_user JOIN system_role ON bi_user.name = 'Christian' and system_role.domain = 'admin';

--Populate Programs
INSERT INTO program (species_id, name, created_by, updated_by, active, key, germplasm_sequence) 
SELECT species.id, 'Trail Mix', by_user_id, by_user_id, true, 'TMTEST', 'tmtest_germplasm_sequence' FROM species WHERE species.common_name = 'Grape';
INSERT INTO program (species_id, name, created_by, updated_by, active, key, germplasm_sequence) 
SELECT species.id, 'Snacks', by_user_id, by_user_id, true, 'SKTEST', 'sktest_germplasm_sequence' FROM species WHERE species.common_name = 'Grape';

--Populate program_ontology
INSERT INTO program_ontology (program_id, created_by, updated_by) 
SELECT id, by_user_id, by_user_id FROM program WHERE name = 'Trail Mix';
INSERT INTO program_ontology (program_id, created_by, updated_by) 
SELECT id, by_user_id, by_user_id FROM program WHERE name = 'Snacks';

--Add Users To Programs
INSERT INTO program_user_role (program_id, user_id, role_id, created_by, updated_by, active) 
SELECT program.id, bi_user.id, role.id, by_user_id, by_user_id, true FROM bi_user JOIN role ON bi_user.name = 'Cucumber Breeder' and role.domain = 'breeder'
JOIN program ON program.name = 'Snacks';

INSERT INTO program_user_role (program_id, user_id, role_id, created_by, updated_by, active) 
SELECT program.id, bi_user.id, role.id, by_user_id, by_user_id, true FROM bi_user JOIN role ON bi_user.name = 'Cucumber Breeder' and role.domain = 'member'
JOIN program ON program.name = 'Trail Mix';

INSERT INTO program_user_role (program_id, user_id, role_id, created_by, updated_by, active) 
SELECT program.id, bi_user.id, role.id, by_user_id, by_user_id, true FROM bi_user JOIN role ON bi_user.name = 'Cucumber Member' and role.domain = 'member'
JOIN program ON program.name = 'Snacks';

INSERT INTO program_user_role (program_id, user_id, role_id, created_by, updated_by, active) 
SELECT program.id, bi_user.id, role.id, by_user_id, by_user_id, true FROM bi_user JOIN role ON bi_user.name = 'TrailMix Breeder' and role.domain = 'breeder'
JOIN program ON program.name = 'Trail Mix';

INSERT INTO program_user_role (program_id, user_id, role_id, created_by, updated_by, active) 
SELECT program.id, bi_user.id, role.id, by_user_id, by_user_id, true FROM bi_user JOIN role ON bi_user.name = 'Christian' and role.domain = 'breeder'
JOIN program ON program.name = 'Snacks';

INSERT INTO program_user_role (program_id, user_id, role_id, created_by, updated_by, active) 
SELECT program.id, bi_user.id, role.id, by_user_id, by_user_id, true FROM bi_user JOIN role ON bi_user.name = 'Christian' and role.domain = 'breeder'
JOIN program ON program.name = 'Trail Mix';

END $$;
