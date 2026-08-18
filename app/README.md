# Books API (minimal)

Minimal in-memory CRUD API for books. Intended for learning CI/workflows and Docker.

Run locally:

```bash
cd app
npm install
npm start
```

The server listens on port 3000 by default. Example requests:

List books:
```bash
curl http://localhost:3000/books
```

Create a book:
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"title":"1984","author":"George Orwell"}' \
  http://localhost:3000/books
```

Docker build & run:

```bash
docker build -t books-api:latest .
docker run -p 3000:3000 books-api:latest
```
