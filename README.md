# Proyecto de API de Películas

Este proyecto es una API para gestionar una colección de películas. Permite recuperar, crear, actualizar y eliminar películas, así como filtrar películas por género.

## Tecnologías

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Zod](https://github.com/colinhacks/zod)
- [crypto](https://nodejs.org/api/crypto.html)
- [fs (File System)](https://nodejs.org/api/fs.html)

## Endpoints

### Recuperar todas las películas o filtrar por género

```http
GET /movies
GET /movies?genre=GENRE
```

### Recupera películas por id
```http
GET http://localhost:1234/movies/dcdd0fad-a94c-4810-8acc-5f108d3b18c3
```

### Recupera todas las películas por género
http
GET http://localhost:1234/movies?genre=Crime

### Crea una película
```http
POST http://localhost:1234/movies
Content-Type: application/json

{
  "title": "Pacific Rim",
  "year": 2013,
  "director": "Guillermo del Toro",
  "duration": 131, 
  "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN85QeuAWcYaiMOLKbwDJRKH37QBj5Dk9sgw&s",
  "genre": [
    "Action",
    "Sci-fi"
  ],
  "rate": 7.1
}
```

### Actualiza una película
```http
PATCH http://localhost:1234/movies/dcdd0fad-a94c-4810-8acc-5f108d3b18c3
Content-Type: application/json

{
  "year": 2025
}
```

## Aprendizajes Clave

- **Express**: Aprendí a crear y configurar un servidor Express y a manejar rutas para diferentes métodos HTTP.
- **Manejo de archivos**: Aprendí a leer y escribir archivos JSON usando el módulo `fs` de Node.js.
- **Validación de datos**: Utilicé la biblioteca `Zod` para validar los datos de entrada y asegurar que cumplan con ciertos esquemas.
- **UUIDs**: Usé `crypto.randomUUID()` para generar identificadores únicos para las películas.
- **JSON**: Aprendí a manejar datos en formato JSON, incluyendo cómo convertir objetos a JSON y escribirlos en un archivo.
