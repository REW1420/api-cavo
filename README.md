API para metodo CRUD para una identidad Usuario

## Requisitos

- Node.js 
- MongoDB 

## Configuración

1. Clona este repositorio: `https://github.com/REW1420/api-cavo`
2. Instala las dependencias: `npm install`
3. Configura el archivo `.env` con tus variables de entorno.

```env

MONGODB_URI=mongodb://tu-base-de-datos
SECRET=your_secret_key
```

## Uso
Inicia la aplicación: npm start
Accede a la API en http://localhost:3001 

## Endpoints

Obtener todos los elementos
URL: /user
Método: GET
Parámetros de consulta: Ninguno
Respuesta exitosa: Código 200, JSON con la lista de elementos.

Crear un nuevo elemento
URL: /user
Método: POST
Cuerpo de la solicitud: JSON con los datos del nuevo elemento.
Respuesta exitosa: Código 200, JSON con un mensaje de creado.

Actualizar un elemento existente
URL: /user?id=id_de_usuario
Método: PUT
Parámetros de ruta en tipo query: id (ID del elemento en BD)
Cuerpo de la solicitud: JSON con los datos actualizados.
Respuesta exitosa: Código 200, JSON con el elemento actualizado.

Eliminar un elemento
URL: /user?id=id_de_usuario
Método: DELETE
Parámetros de ruta en tipo query: id (ID del elemento en BD)
Respuesta exitosa: Código 200, JSON con un mensaje de eliminado.
