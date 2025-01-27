# Proyecto de API de Películas

Este proyecto es una API para gestionar una colección de películas. Permite recuperar, crear, actualizar y eliminar películas, así como filtrar películas por género.

## Tecnologías

- [Node.js](https://nodejs.org/): Utilizado como entorno de ejecución para construir el servidor. Node.js permite ejecutar JavaScript en el servidor, lo que es ideal para aplicaciones web en tiempo real y manejadores de eventos.
- [Express](https://expressjs.com/): Un framework web para Node.js que simplifica la creación de servidores y la gestión de rutas. En este proyecto, Express se ha utilizado para definir los endpoints de la API, gestionar las solicitudes HTTP y enviar respuestas al cliente.
- [Zod](https://github.com/colinhacks/zod): Una biblioteca de validación de esquemas que se ha utilizado para validar los datos de entrada en las solicitudes POST y PATCH. Zod asegura que las películas nuevas y actualizadas cumplan con los requisitos específicos de formato y contenido.
- [crypto](https://nodejs.org/api/crypto.html): Un módulo de Node.js utilizado para generar identificadores únicos universales (UUIDs) para las películas. Esto garantiza que cada película tenga un identificador único.
- [fs (File System)](https://nodejs.org/api/fs.html): Un módulo de Node.js que se ha usado para leer y escribir el archivo `movies.json`. Este archivo almacena la colección de películas, y el módulo `fs` permite actualizarlo cuando se crean, actualizan o eliminan.

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

## Estructura del Proyecto

- `movies.json`: Archivo JSON donde se almacenan los datos de las películas.
- `schemas/movies.js`: Archivo que contiene los esquemas de validación para las películas utilizando Zod.
- `index.js`: Archivo principal que configura y ejecuta el servidor Express.

## Validaciones

- **Título**: Debe ser una cadena.
- **Año**: Debe ser un número entero positivo entre 1890 y 2026.
- **Director**: Debe ser una cadena.
- **Duración**: Debe ser un número entero positivo.
- **Calificación**: Debe ser un número entre 0 y 10.
- **Póster**: Debe ser una URL válida.
- **Género**: Debe ser un array que contenga uno o más de los siguientes géneros: Action, Drama, Sci-fi, Comedy, Fantasy, Horror, Thriller.

## Conclusión

Gracias por tomarte el tiempo para revisar mi proyecto de API de películas. A través de este proyecto, he desarrollado una API completa utilizando Node.js y Express, que permite realizar operaciones CRUD sobre una colección de películas. He implementado validaciones de datos con la ayuda de la biblioteca Zod, asegurándome de que los datos de entrada cumplan con los requisitos establecidos. Además, he manejado archivos JSON para almacenar los datos de las películas de manera persistente.

Espero que encuentres útil y bien estructurado este código. Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue o hacer un pull request. Estoy abierto a colaboraciones y siempre dispuesto a mejorar y aprender.

¡Gracias por tu interés en mi proyecto!

