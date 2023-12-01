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
Endpoints
Obtener todos los elementos
URL: /api/tu-recurso
Método: GET
Parámetros de consulta: Ninguno
Respuesta exitosa: Código 200, JSON con la lista de elementos.
Obtener un elemento por ID
URL: /api/tu-recurso/:id
Método: GET
Parámetros de ruta: id (ID del elemento)
Respuesta exitosa: Código 200, JSON con el elemento.
Crear un nuevo elemento
URL: /api/tu-recurso
Método: POST
Cuerpo de la solicitud: JSON con los datos del nuevo elemento.
Respuesta exitosa: Código 201, JSON con el nuevo elemento creado.
Actualizar un elemento existente
URL: /api/tu-recurso/:id
Método: PUT
Parámetros de ruta: id (ID del elemento)
Cuerpo de la solicitud: JSON con los datos actualizados.
Respuesta exitosa: Código 200, JSON con el elemento actualizado.
Eliminar un elemento
URL: /api/tu-recurso/:id
Método: DELETE
Parámetros de ruta: id (ID del elemento)
Respuesta exitosa: Código 204 (Sin contenido)
