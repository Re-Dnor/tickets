server:
	json-server -p 8000 tickets.json

app:
	npm run build

start:
	make server & make app