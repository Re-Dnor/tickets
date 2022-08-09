server:
	json-server -p 4000 tickets.json

app:
	npm run build

start:
	make server & make app