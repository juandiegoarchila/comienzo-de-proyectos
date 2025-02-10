# SERVI

SERVI es un sistema backend construido con **Node.js** y **Express.js** que utiliza **Firebase** como base de datos. Su objetivo es proporcionar una estructura sólida para manejar autenticación, gestión de datos y otras funcionalidades esenciales para aplicaciones web o móviles.

Este backend está diseñado para ser modular y escalable, permitiendo una fácil integración con diferentes clientes frontend como aplicaciones web, móviles o incluso sistemas de terceros.

---

## 📌 Características

- API RESTful con Express.js  
- Plantillas con Handlebars  
- Autenticación con Firebase  
- Seguridad con Helmet y CORS  
- Registro y gestión de logs con Morgan y Winston  
- Validación de datos con Joi  
- Base de datos con Firebase  
- Soporte para variables de entorno con dotenv  
- Testing con Mocha y Chai  

---

## 🚀 Instalación

Clona este repositorio y ejecuta el siguiente comando para instalar todas las dependencias:

```sh
npm install
```

También puedes instalar todas las dependencias manualmente:

```sh
npm init -y; npm install express express-handlebars firebase-admin dotenv body-parser cors helmet joi morgan winston express-validator google-gax node-fetch; npm install --save-dev chai mocha nodemon


npm install swagger-jsdoc swagger-ui-express

```

---

## 🏢 Estructura del Proyecto

```
/src
├── /controllers     # Lógica de negocio (controladores)
├── /models          # Modelos de datos
├── /routes          # Definición de rutas
├── /views           # Archivos estáticos o plantillas Handlebars
├── /public          # Archivos estáticos (imágenes, CSS, JS frontend)
├── /config          # Configuración global del proyecto
│   ├── db.js        # Configuración de Firebase
│   ├── config.js    # Configuración de variables de entorno
├── /middleware      # Middlewares globales (seguridad, errores, etc.)
│   ├── errorHandler.js
│   ├── cors.js
├── app.js           # Configuración principal de Express
├── firebase.js      # Inicialización de Firebase Admin SDK
├── index.js         # Punto de entrada del servidor
.gitignore            # Evitar subir archivos innecesarios
.env                  # Variables de entorno
README.md             # Documentación del proyecto
package.json          # Configuración de dependencias y scripts
```

### 📂 Explicación de los archivos clave

- **`firebase.js`**: Inicializa Firebase Admin SDK y establece la conexión con Firebase.  
- **`config/config.js`**: Define variables de configuración globales y carga el archivo `.env`.  
- **`config/db.js`**: Administra la conexión con Firebase y las funciones de base de datos.  
- **`middleware/errorHandler.js`**: Middleware para manejar errores de manera centralizada.  
- **`middleware/cors.js`**: Configura la seguridad de la API mediante CORS.  
- **`views/`**: Contiene las plantillas de Handlebars si se usa renderización del lado del servidor.  
- **`public/`**: Contiene archivos estáticos como imágenes, estilos CSS y scripts frontend.  

Para crear la estructura y archivos rápidamente, ejecuta este comando:

```sh
mkdir src, src/config, src/controllers, src/middleware, src/public, src/routes, src/validators, src/views;
New-Item src/index.js, src/app.js, src/config/config.js, src/controllers/userController.js, src/middleware/errorHandler.js, src/middleware/validation.js, src/routes/Users.js, src/validators/userValidator.js, src/views/app.js, src/views/index.js, .env, .gitignore, README.md -ItemType File

```

---

## 📦 Dependencias y Para Qué Se Usan

### 📌 Dependencias principales

- **express**: Framework web para manejar rutas y peticiones.  
- **express-handlebars**: Motor de plantillas para renderizar vistas dinámicas con Handlebars.  
- **firebase-admin**: SDK de Firebase para autenticación y manejo de datos.  
- **dotenv**: Carga variables de entorno desde un archivo `.env`.  
- **body-parser**: Analiza datos enviados en el cuerpo de las peticiones.  
- **cors**: Permite controlar el acceso a la API desde otros dominios.  
- **helmet**: Mejora la seguridad configurando cabeceras HTTP adecuadas.  
- **joi**: Validación de datos para garantizar estructuras correctas.  
- **morgan**: Registra logs de peticiones HTTP en la consola.  
- **winston**: Librería avanzada para manejo de logs y registros.  

### 🛠 Dependencias de desarrollo

- **nodemon**: Reinicia el servidor automáticamente al detectar cambios en el código.  
- **mocha**: Framework de testing para ejecutar pruebas unitarias.  
- **chai**: Librería de aserciones para pruebas unitarias.  

---

## 🏃‍♂️ Ejecución del Proyecto

Para iniciar el servidor en modo producción:

```sh
npm start
```

Para iniciar en modo desarrollo con recarga automática:

```sh
npm run dev
```

Para ejecutar las pruebas:

```sh
npm test
```

---

## 🌍 Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```
node_modules/
.env
PORT=5000
GOOGLE_APPLICATION_CREDENTIALS="C:\aca  tu proyecto raiz\firebase.json"
```

---

## 🧪 Pruebas Unitarias con Mocha y Chai

Ejemplo básico de prueba en `test/sample.test.js`:

```js
const chai = require('chai');
const expect = chai.expect;

describe('Prueba de ejemplo', () => {
    it('Debe retornar verdadero', () => {
        expect(true).to.be.true;
    });
});
```

Ejecuta las pruebas con:

```sh
npm test
```

---

## 🛠 Buenas Prácticas

- Mantén una estructura modular.
- Usa variables de entorno con `.env`.
- Maneja errores con middlewares personalizados.
- Usa `winston` para registros y logs.
- Valida datos con `joi`.
- Protege el servidor con `helmet` y `cors`.
- Implementa pruebas con `mocha` y `chai`.

---

## 📌 Contribuciones

Si deseas contribuir, por favor abre un issue o un pull request con tus mejoras.

---

## 📝 Licencia

Este proyecto está bajo la licencia **ISC**.

📌 **Autor**: Juan Diego  

