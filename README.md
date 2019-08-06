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
- Paso 6: Para poder utilizar este plugin es necesario crear el archivo llamado **webpack.config.js** el cuál debe exportar un objeto con los siguientes campos:
  - output: salida de la compilación.
  - plugins: plugins que queremos que utilice.
- Paso 7: Añadir el plugin de webpack de html a los plugins del archivo de configuración de webpack.
- Paso 8: En los scripts del package.json vamos a añadir el script "build": "webpack", el comando webpack buscara por defecto en la ruta src/index.js; con esto es posible utilizar `npm run build` para compilar el proyecto, en la carpeta dist ahora tendremos un archivo **app.bundle.js** y un **index.html** generado por el plugin de html de webpack.
- Paso 7: Instalaremos webpack-dev-server con: `npm i webpack-dev-server --save-dev`.
- Paso 8: Añadiremos un nuevo script llamado dev: "dev": "webpack-dev-server". Esto nos va a compilar toda la aplicación y adicionalmente nos proporcionará una URL para acceder al desarrollo.

### INSTALACIÓN DE REACT Y BABEL

En esta clase vamos a configurar React instalando las dependencias `npm i react react-dom` y Babel para poder transpilar código jsx a JavaScript Vanilla con: `npm i @babel/core @babel/preset-env babel-loader @babel/preset-react --save-dev`.

Para decirle a webpack que utilice nuestro propio template de html debemos agregar lo siguiente:

```javascript
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
```

- @babel/preset-env: Permite conseguir que las transformaciones de JavaScript que se produzcan estén basadas en la última versión de JavaScript aceptada por el ECMASCRIPT COMITE.

Ahora añadiremos en nuestro **webpack.config.js** lo siguiente:

```javascript

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  }
}

```

### LINTER EXTENSIONES Y NOW

En esta clase haremos que el desarrollo sea más ágil y correcto siguiendo los siguientes pasos:

- Vamos a instalar StandardJS como dependencia de desarrollo con: `npm i standard --save-dev`. StandardJS nos va a servir de Linter para una mejor escritura de JavaScript/React.
- Agregaremos un nuevo script en nuestro package.json: `"lint": "standard"`.
- Ahora vamos a ignorar aquellos archivos que no queremos que el Linter arregle, añadiremos en nuestro package.json lo siguiente:

```javascript
"standard": {
    "ignore": [
      "/api/**"
    ]
  }
```

- Ahora, queremos que nuestro Linter nos detecte los errores a medida que vamos escribiendo, para hacer esto añadimos lo siguiente a nuestro package.json:

```javascript
"eslintConfig": {
  "extends": [
    "./node_modules/standard/eslintrc.json"
  ]
}
```

- Ahora debemos tener lo siguiente en nuestro editor de código para que funcione todo al pie de la letra:

  - Tener instalada la extensión ESLint
  - Si quieres que al guardar los cambios se formatee tu código deberás tener instalada la extensión Prettier
  - Tener las siguientes configuraciones en VSCode:
    - Format On Save: false
    - Prettier: Eslint Integration: true
    - Eslint: Auto Fix On Save: true

Ahora utilizaremos Now para hacer el deploy de nuestro proyecto.
Descargaremos e instalaremos Now para que nos registre de una manera mucho más fácil los tokens de acceso y podamos continuar con el curso.
Entraremos a la carpeta de api y notaremos que ya tiene un archivo now.json que preparamos para ti con toda la configuración necesaria para hacer el deploy.
Para desplegar el proyecto del backend haremos lo siguiente en nuestra terminar:

- cd api
- Cambiamos el name de la aplicación en el now.json
- Finalmente ejecutamos now

Ahora para desplegar nuestro front haremos lo siguiente:

- Crearemos un archivo now.json en el root de nuestro proyecto con lo siguiente:

```javascript
{
  "version": 2,
  "name": "petgram",
  "builds": [
    {
      "use": "@now/static-build",
      "src": "package.json"
    }
  ],
  "routes": [
    {
      "src": "(.*).js",
      "dest": "/$1.js"
    },
    {
      "src": "(.*).json",
      "dest": "/$1.json"
    },
    {
      "src": "/.*",
      "dest": "index.html"
    }
  ]
}
```

- En nuestro package.json añadiremos el siguiente script: `"now-build": "npm run build"`.
- Finalmente en la raíz de nuestro proyecto ejecutaremos **now** para que nos dé una URL en la que se verá nuestro proyecto."

## CREANDO LA INTERFAZ CON STYLED COMPONENTS

### ¿QUÉ ES CSS IN JS?

Antes la forma en la que construíamos nuestras aplicaciones era con HTML-centric:

```html
<button className='button button-red'>
  Click here!
</button>
```

```javascript
const button = document.querySelector('button')
button.addEventListener('click', function () {
  doSomething()
})
```

```css
.button {
  border-radius: 4px;
}

.button-red {
  background: red;
  color: #fff;
}
```

Luego pasamos a JavaScript-centric:

```javascript
render () {
  return (
    <button
      className='button button-red'
      onClick={doSomething}
    >
      Click here!
    <button>
  )
}
```
```css
.button {
  border-radius: 4px;
}

.button-red {
  background: red;
  color: #fff;
}
```

Ahora hoy en día pasamos a CSS-in-JS nos permite no solo hacer el jsx si no colocar los estilos en el mismo JavaScript, de la siguiente manera:

```javascript
const Button = styled.button`
  border-radius: 4px;
  ${props => props.accent && `
    background: red;
    color: #fff;
  `}

render () {
  return (
    <Button />
  )
}
```

### CREANDO NUESTRO PRIMER COMPONENTE: CATEGORY

Vamos a construir nuestro primer componente el cual será y usaremos styled-components para hacer los estilos de nuestro proyecto. Para esto debemos instalar la dependencia de los style components con npm i styled-components (esta dependencia sí es de producción).

Para que el código del styled-component esté mejor formateado en nuestro editor utilizaremos esta extensión vscode-styled-components.

### CREANDO LISTOFCATEGORIES Y ESTILOS GLOBALES

Para crear nuestros estilos globales con styled-components haremos lo siguiente:

```javascript
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
  }

  ul {
    list-style: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    max-width: 500px;
    overscroll-behavior: none;
    width: 100%;
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }
```

### CREANDO PHOTOCARD Y USANDO REACT-ICON

En esta clase vamos a construir nuestro componente que tendrá las imágenes de nuestro timeline llamado .

Usaremos **react-icons** para darle una propuesta visual mucho más amigable a nuestro proyecto con íconos como Font Awesome, Ionicons, Material Design Icons y mucho más que podremos usar.

`npm i react-icons`

### SVGR: de SVG a componente de ReactJS

En esta clase usaremos <maketext.io> para crear nuestro logo y descargarlo en SVG. Posteriormente a esto utilizaremos SVGOMG para optimizar nuestro logo y tener una mejor versión para usarla en nuestro proyecto.

Luego para convertir nuestro logo svg en un componente de react utilizaremos SVGR.

### CREANDO ANIMACIONES CON KEYFRAMES

Para esto es necesaro importar keyframes de los style componentes de la siguiente manera: `import styled, { keyframes } from 'styled-components'`

El fade in puede ser iplementado así: 

```javascript
const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`

export const Img = styled.img`
  animation: 1s ${fadeInKeyframes} ease;
`
```

Para hacer reutilizable la animación es necesario importar css

```javascript
import styled, { keyframes, css } from 'styled-components'

const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeInKeyframes} ${type};`

export const Img = styled.img`
  ${fadeIn({time: '5s'})}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`
```

### QUÉ SON LOS HOOKS

Los **hooks** son una característica nueva que sólo están disponibles a partir de la versión 16.8.0.

Son **funciones** que nos permiten acceder a **casi todas** las características de React desde componentes funcionales.

#### HOOKS PRINCIPALES

- useState: permite añadir un estado local en el componente.
- useEffect: nos permite ejecutar una función cada vez que rendericemos nuestro componente.
- useContext: nos permite acceder al contexto del API para obtener valores que se utilizarán en toda la plicación de forma global.

#### HOOKS AUXILIARES

React es una biblioteca de JavaScript para construir interfaces de usuario. Es declarativo, basado en componentes y puedes escribir una vez y usarlo donde sea.

- useReducer: permite actualizar el estado del componente como se realiza con Redux.
- useCallback, useMemo, useRef: nos permiten recoger referencias del dom.
- useImperativeHandle, useLayoutEffect, useDebugValue: permite acceder a valores en desarrollo sin necesidad de poner console.logs

#### CUSTOM HOOKS

Los hooks pueden ser personalizados de forma que la lógica puede ser utilizada en diferentes componentes.

#### VENTAJAS

- Separación de conceptos.
- 100% retrocompatibles.
- Mejor transpilación de Babel.
- Mejor performance.

#### UTILIZANDO USEEFFECT

Este método puede recibir dos parámetros:

1. La función a ejecutar.
2. Corresponde a las dependencias que necesita el método para ejecutarse.

Si se pasa como segundo parámetro un arreglo vacío, tendrá el mismo comportamiento que el componentDidMount.

```javascript
  useEffect(function () {
    window.fetch('https://petgram-afisaacs-server-ptq2tov5n.now.sh/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])
```

### USANDO INTERSECTION OBSERVER

Intersection Observer resuelve el problema de saber si algún elemento está visible o no para el usuario. Nos permite hacer un lazy loading muy fácil o cargar contenido multimedia dinámicamente cuando hay más impacto para el usuario, solo deja volar tu imaginación y sácale el jugo con esta clase.

```javascript
const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver(entries => {
      const { isIntersecting } = entries[0]
      console.log(isIntersecting)
      isIntersecting && setShow(isIntersecting)
      // observer.disconnect()
    })
    observer.observe(ref.current)
  }, [ref])
```
