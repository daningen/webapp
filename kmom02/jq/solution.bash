#!/usr/bin/env bash

jq 'keys' tag-dbwebb.json | tee a.txt
jq '.meta.code' tag-dbwebb.json | tee b.txt
jq '.pagination.next_url' tag-dbwebb.json | tee c.txt
jq '.data[9].likes.count' tag-dbwebb.json | tee d.txt
jq '.data[0].tags|length' tag-dbwebb.json | tee e.txt
jq '.data[0].user' tag-dbwebb.json | tee f.txt
jq '.data[0].location.name' tag-dbwebb.json | tee g.txt
jq '.data[0].comments.data[].text' tag-dbwebb.json | tee h.txt
jq '.data[0].likes.data[0].full_name' tag-dbwebb.json | tee i.txt
jq '.data[0].images.standard_resolution.url' tag-dbwebb.json | tee j.txt
jq '.data[].comments.data[] | select(.from.username == "alkifaey").text ' tag-dbwebb.json | tee k.txt
jq '.data[] | select (.comments.data[].from.username == "tobhed" ).link' tag-dbwebb.json | tee l.txt
jq '.data[] | select(.likes.count > 7) | .link' tag-dbwebb.json | tee m.txt
jq '.data[] | select(.likes.count > 5) | select (.comments.count !=0).link'  tag-dbwebb.json | tee n.txt
jq '.data[] | select (.location.name=="Studentviken").likes.data[].username' tag-dbwebb.json | tee o.txt
