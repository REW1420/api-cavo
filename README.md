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
1. Inicia la aplicación: npm start
2. Accede a la API en http://localhost:3001 

## Endpoints

- Obtener todos los elementos  </br>
URL: /user  </br>
Método: GET  </br>
Parámetros de consulta: Ninguno  </br>
Respuesta exitosa: Código 200, JSON con la lista de elementos.  </br>

- Crear un nuevo elemento  </br>
URL: /user  </br>
Método: POST  </br>
Cuerpo de la solicitud: JSON con los datos del nuevo elemento.  </br>
Respuesta exitosa: Código 200, JSON con un mensaje de creado.  </br>

- Actualizar un elemento existente  </br>
URL: /user?id=id_de_usuario  </br>
Método: PUT  </br>
Parámetros de ruta en tipo query: id (ID del elemento en BD)  </br>
Cuerpo de la solicitud: JSON con los datos actualizados.  </br>
Respuesta exitosa: Código 200, JSON con el elemento actualizado.  </br>

- Eliminar un elemento  </br>
URL: /user?id=id_de_usuario  </br>
Método: DELETE  </br>
Parámetros de ruta en tipo query: id (ID del elemento en BD)  </br>
Respuesta exitosa: Código 200, JSON con un mensaje de eliminado.  </br>
