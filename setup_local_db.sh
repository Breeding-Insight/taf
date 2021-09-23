#!/bin/bash

# assumes bi-docker-stack & taf repos exist locally & are subdirectories under same directory
# also assume default docker services/ports

docker cp ../bi-docker-stack/brapi-server/sql/species.sql bidb:/species.sql
docker exec bidb psql -U postgres -a -f species.sql -d postgres

docker cp populate-taf-data.sql bidb:/populate-taf-data.sql
docker exec bidb psql -U postgres -a -f populate-taf-data.sql -d bidb

trailMixId=$( docker exec bidb psql -U postgres -d bidb -t -c "SELECT id FROM program WHERE name='Trail Mix'" )
snacksId=$( docker exec bidb psql -U postgres -d bidb -t -c "SELECT id FROM program WHERE name='Snacks'" )
snacksId="$(echo -e "${snacksId}" | sed -e 's/^[[:space:]]*//')"
trailMixId="$(echo -e "${trailMixId}" | sed -e 's/^[[:space:]]*//')"
docker inspect --format "{{json .State.Health }}" brapi-server | jq
docker exec brapi-server curl --header "Content-Type: application/json;charset=UTF-8" -v -d '[{"programName":"Snacks","externalReferences":[{"referenceSource":"breeding-insight.net","referenceID":"'"$snacksId"'"}]}]' http://localhost:8080/brapi/v2/programs
docker exec brapi-server curl --header "Content-Type: application/json;charset=UTF-8" -v -d '[{"programName":"Trail Mix","externalReferences":[{"referenceSource":"breeding-insight.net","referenceID":"'"$trailMixId"'"}]}]' http://localhost:8080/brapi/v2/programs
