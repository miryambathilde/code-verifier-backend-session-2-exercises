# Aplicación MERN

En este curso vamos a desarrollar una API para nuestro back, el lado del servidor, con Mongoose, Express, Node y Jest.

Para la parte front, la parte del cliente, utilizaremos React.

El objetivo, por tanto, será desarrollar una aplicación MERN FullStack para luego conectar nuestra API con el front y poder consumir datos de la misma, desde la web desarrollada con React.

Para ello es necesario tener instalado previamente [Node](https://nodejs.org/es/) y NPM para poder iniciar nuestra aplicación y poder instalar todos los paquetes y dependencias necesarias.

## Dependencias instaladas

- [Dotenv](https://www.npmjs.com/package/dotenv):
    módulo sin dependencias que permite cargar las variables de entorno de un proyecto node desde un archivo.

- [Express](https://www.npmjs.com/package/express):
    el framework web más popular de Node, y es la librería subyacente para un gran número de otros frameworks web de Node populares. Proporciona mecanismos para: Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).

- [Typescript](https://www.npmjs.com/package/typescript):
    lenguaje de programación construido por encima de JavaScript. Este superconjunto de JavaScript dota al lenguaje de varias características adicionales que hacen que podamos escribir código con menos errores, más sencillo, coherente y fácil de probar.

- [Nodemon](https://www.npmjs.com/package/nodemon):
    herramienta que ayuda a desarrollar aplicaciones basadas en Node.js al reiniciar automáticamente la aplicación del nodo cuando se detectan cambios en los archivos del directorio.

- [Jest](https://www.npmjs.com/package/jest):
    librería que nos permite escribir y ejecutar tests, es desarrollada por Facebook y usada por plataformas como airbnb, twitter, spotify... Nos permite hacer tanto test unitarios como pruebas end to end.

- [Concurrently](https://www.npmjs.com/package/concurrently):
    nos permite ejecutar varios comandos al mismo tiempo.

- [Webpack](https://www.npmjs.com/package/webpack):
    empaquetador de módulos que te permite generar un archivo único con todos aquellos módulos que necesita tu aplicación para funcionar. Una de las mayores ventajas de Webpack es que hasta cierto punto podemos utilizarlo como un automatizador de tareas como Grund o Gulp, para minificación de archivos, comprimir imágenes, y poder utilizar las nuevas especificaciones de Javascript EcmaScript 2016–2017 con la traducción de transpiradores como Babel o Typescript a Javascript que entienda cualquier navegador, poder transpilar compiladores de hojas de estilos CSS, haciendo nuestro aplicación más rápida.

- [Webpack Shell Plugin](https://www.npmjs.com/package/webpack-shell-plugin):
    permite ejecutar cualquier comando de shell antes o después de las compilaciones del paquete web. Esto funcionará tanto para webpack como para webpack-dev-server.

- [Webpack CLI](https://www.npmjs.com/package/webpack-cli):
    con esto le damos soporte de comandos Webpack a nuestra consola.

- [Webpack Node Externals](https://www.npmjs.com/package/webpack-node-externals):
    permite definir elementos externos indicando los módulos que no se deben agrupar. Cuando se empaqueta con Webpack para el back-end, generalmente no desea empaquetar sus node_modulesdependencias. Esta biblioteca crea una función externa que ignora node_modulescuando se empaqueta en Webpack.

- [SuperTest](https://www.npmjs.com/package/supertest):
    proporciona una abstracción de alto nivel para probar HTTP, al mismo tiempo que le permite descender a la API de nivel inferior proporcionada por superagent.

- [Serve](https://www.npmjs.com/package/serve):
    permite servir nuestro coverage de test a través de una interface web

- [Mongoose](https://www.npmjs.com/package/mongoose):
    librería para Node.js que nos permite escribir consultas para una base de datos de MongooDB, con características como validaciones, construcción de queries, middlewares, conversión de tipos y algunas otras, que enriquecen la funcionalidad de la base de datos. La parte central del uso de Mongoose está en la definición de un esquema donde se indica la configuración de los documentos para una colección de MongoDB.

#### Librerías para poder usar Typscript en nuestro servidor y asegurarnos de que se compila a javascript

- [Types/express](https://www.npmjs.com/package/@types/express)
- [Types/node](https://www.npmjs.com/package/@types/node)
- [types/jest](https://www.npmjs.com/package/@types/node)

#### Librería para crear nuestras propias reglas de buenas prácticas

- [Eslint](https://www.npmjs.com/package/eslint)

## Scripts creados

```bash
"scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\"",
    "test": "jest",
    "serve:coverage": "npm run test && cd coverage/lcov-report && npx serve"
  }
```

### Explicación de lo que ejecuta cada script

- Build: hace una compilación de nuestra aplicación Typescript, traduciéndola a JavaScript y nos crea nuestra carpeta /dist
- Start: lo que hace este script es levantar el servidor ejecutando el archivo index.js que se encuentra dentro de nuestra carpeta dist, tras la build realizada.
- Dev: este comando está continuamente observando todos los cambios realizados en nuestros archivos Typescript, para que cualquier cambio realizada, se realice en nuestro index.js de la build sin necesidad, de hacer la build manualmente posteriormente, ni reiniciar nuestro servidor, cada vez que realizamos un cambio.
- Test: ejecutará nuestra libería jest para realizar el testing y nos mostrará el resultado del test así como el coverage por consola.
- Serve:coverage: este comando nos permitirá realizar el test de nuestra API/servidor y una vez finalizado, nos mostrará el resultado del mismo, que se guarda, dentro de la carpeta coverage, en el archivo lcov-report, y nos lo abrirá en el puerto 3000, mostrándolo en una interface web.

## Variables de entorno

- Para nuestro servidor, tendremos que definir nuestras variables de entorno, es decir el puerto donde se levantará nuestro servidor cuando lo iniciemos, para ellos creamos una archivo .env, archivo que no debe subirse al repositorio por temas de brechas de seguridad, en él lo que haremos será indicar:

```env
PORT=8000