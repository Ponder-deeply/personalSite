echo "Starting Drizzle Database..."

docker run --name drizzle-postgres -e POSTGRES_PASSWORD="mypass" -e POSTGRES_USER="user" -e POSTGRES_DB="notes" -d -p 5432:5432 postgres
#docker run drizzle-postgres

echo "DB running on: postgres://user:mypass@localhost:5432/notes"
