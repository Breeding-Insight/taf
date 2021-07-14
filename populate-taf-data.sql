/*
 * See the NOTICE file distributed with this work for additional information
 * regarding copyright ownership.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
INSERT INTO program (species_id, name, created_by, updated_by, active) 
SELECT species.id, 'Trail Mix', by_user_id, by_user_id, true FROM species WHERE species.common_name = 'Grape';
INSERT INTO program (species_id, name, created_by, updated_by, active) 
SELECT species.id, 'Snacks', by_user_id, by_user_id, true FROM species WHERE species.common_name = 'Grape';

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

--Pass on Program IDs for BRAPI setup
--SELECT id AS programId, name AS programName FROM program FOR JSON PATH, ROOT('Programs');
--COPY (
--  SELECT json_agg(row_to_json(program_data)) :: text
--  FROM (
--      SELECT
--        name,
--        id
--      FROM program
--        ) program_data
--) TO :filepath;

--COPY (SELECT json_agg(t) from program) TO :filepath;
\copy (SELECT json_agg(program) FROM (SELECT name, id FROM program)) TO '~/test.json';

END $$;
