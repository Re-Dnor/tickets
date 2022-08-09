server:
	json-server -p 4000 tickets.json

app:
	npm start

start:
	make server & make app