# REACT AVANZADO

## INTRODUCCIÓN

### BIENVENIDA AL CURSO Y PREREQUISITOS

¡Te damos la bienvenida al Curso Avanzado de React!

En este curso nuestro profesor Miguel Ángel Durán García, Lead Frontend Architect en Adevinta Spain trabajando desde hace cinco años con React, nos dará una vista más profunda de cómo usar React con Hooks, propTypes y mucho más. Recuerda que React es una biblioteca de vistas creada por Facebook no solo para la web, también podemos hacer vistas nativas para el móvil, aplicaciones de terminal e incluso realidad virtual. React es basado en componentes y declarativo.

¿Por qué debes seguir profundizando en tus conocimientos de React?

>Actualmente es la tecnología más demandada del mercado.
>Divide el código utilizando React.lazy.
>Render props.
>Hooks personalizados.
>Comparte la lógica con componentes de orden superior.

Recuerda que cualquier duda puedes usar nuestro sistema de discusiones. ¡Nunca pares de aprender!

### PROYECTO Y TECNOLOGÍAS QUE USAREMOS

En este curso realizaremos una aplicación muy parecida a Instagram, llamada petgram. Tendremos nuestras rutas, gestión de usuarios y likes.

Utilizaremos como empaquetador y transpilador:

- Webpack
- Babel

Estilado con CSS en JS con:

- styled-components

Como linter utilizaremos:

- Standard JS

Para fetching (obtención) de datos:

- GraphQL
- React Apollo

Para el enrutado de la SPA utilizaremos:

- Reach Router

Para las buenas prácticas utilizaremos:

- Lighthouse
- Cypress

Por último haremos SEO, PWA y Deploy con:

- React Helmet
- Workbox
- Progressive Web App
- Deply con Now

## PREPARANDO EL ENTORNO DE DESARROLLO

### CREANDO EL REPOSITORIO DE WEBPACK

Pasos para iniciar nuestro proyecto:

- Paso 1: Vamos a clonar el repositorio desde <github.com/midudev/curso-platzi-react-avanzado> usando `git clone URL_DEL_REPO` en nuestra consola.
- Paso 2: Vamos a instalar webpack y webpack-cli como dependencias de desarrollo con: npm i webpack wepack-cli --save-dev.
- Paso 3: Crearemos una carpeta llama src y dentro de ella un archivo index.js en el cual colocaremos solo un console.log('Empezamos el curso!').
- paso 4: Decirle a Webpack que nos compile el index.js con `./node_modules/.bin/webpack src/index.js`:
  Esto nos crea el compilado en una carpeta llamada dist, esto peude ser comprobado utilizando `node dist/main.js`.
- Paso 5: Nuesta aplicación web la queremos ver con HTML, por lo que es necesario instalar un plugin de Webpack con el comando `npm i html-webpack-plugin --save-dev`.
- Paso 6: PAra poder utilizar este plugin es necesario crear el archivo llamado **webpack.config.js** el cuál debe exportar un objeto con los siguientes campos:
  - output: salida de la compilación.
  - plugins: plugins que queremos que utilice.
- Paso 7: Añadir el plugin de webpack de html a los plugins del archivo de configuración de webpack.
- Paso 8: En los scripts del package.json vamos a añadir el script "build": "webpack", el comando webpack buscara por defecto en la ruta src/index.js; con esto es posible utilizar `npm run build` para compilar el proyecto, en la carpeta dist ahora tendremos un archivo **app.bundle.js** y un **index.html** generado por el plugin de html de webpack.
- Paso 7: Instalaremos webpack-dev-server con: `npm i webpack-dev-server --save-dev`.
- Paso 8: Añadiremos un nuevo script llamado dev: "dev": "webpack-dev-server". Esto nos va a compilar toda la aplicación y adicionalmente nos proporcionará una URL para acceder al desarrollo.
