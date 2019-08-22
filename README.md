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

### USO DE POLYFILL DE INTERSECTION OBSERVER E IMPORTS DINÁMICOS

Debido a que sólo queremos utilizar el polyfill en el **hook** es necesario utilizar un import dinámico.

```javascript
  useEffect(() => {
    import('intersection-observer')
    ...
```

Para poder user el import dinámico se debe instalar lo siguiente:

npm i @babel/plugin-syntax-dynamic-import -D

En el archivo de de configuración de webpack se agrega lo siguiente:

```javascript
  options: {
    plugins: ['@babel/plugin-syntax-dynamic-import'],
    presets: [
      '@babel/preset-env',
      '@babel/preset-react'
    ]
  }
```

Para realizar el **import** dinámico sin que el lint maqque error, es necesario instalar otro parceador al que utiliza por defecto el linter `npm i babel-eslint --save-dev`.

```javascript
  "eslintConfig": {
    "parser": "babel-eslint",
    "extends": [
      "./node_modules/standard/eslintrc.json"
    ]
  }
```

## GRAPH QL Y REACT APOLLO

### ¿QUÉ ES GRAPHQL Y REACT APOLLO? INICIALIZANDO REACT APOLLO CLIENT Y PRIMER HOC

GraphQL es un lenguaje creado por Facebook para obtener solo los datos que necesitamos en nuestra aplicación. Imaginemos que tenemos una REST API con WordPress, él nos entrega un JSON con mucha data innecesaria y solo queremos unos cuantos fields; GraphQL hace posible obtener únicamente esa data.

React Apollo es un cliente que nos va a permitir conectarnos a un servidor GraphQL.

Vamos a instalar npm i apollo-boost, una utilidad que nos permite inicializar nuestra conexión con un servidor de Apollo muy rápidamente y sin configuración, necesitaremos npm i react-apollo el cual es la integración de Apollo con React y finalmente npm i graphql.

Configuraremos nuestro index.js para inicializar nuestro cliente de Apollo con GraphQL de la siguiente manera:

```javascript
  // index.js

  {/*...*/}
  import ApolloClient from 'apollo-boost'
  import { ApolloProvider } from 'react-apollo'

  {/*...*/}

  const client = new ApolloClient({
          uri: 'URL_DEL_BACKEND' // En el proyecto usamos https://petgram-server.midudev.now.sh/graphql aquí debes colocar el tuyo
  })

  ReactDOM.render(
          <ApolloProvider client={client}>
                  <App />
          ApolloProvider>,
          document.getElementById('app')
  )
```

## REACH ROUTER

### ¿QUÉ ES REACH ROUTER? CREANDO LA RUTA HOME

Reach Router es una versión simplificada y mejor optimizada de React Router, su creador es Ryan Florence el mismo creador de React Router. Se anunció que los dos paquetes se iban a unir, pero su API se va a parecer más a Reach Router.

En este módulo te vamos a enseñar como usar este increíble paquete para manejar las rutas en nuestra aplicación.

`npm i @reach/router`

En la configuración del webáck es necesario cambiar la forma en como se inicializa con el flag `webpack-dev-server --history-api-fallback`, de esta manera cuando intenta navegar a cualquier ruta el folder que va a utilizar siempre será el **index.html**, esto es porque nuestro enrutado está en el cliente.

En la configuración del webpack también es necesario indicar que la ruta pública de la siguiente manera:

```javascript
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
```

### USANDO LINK PARA EVITAR RECARGAR LA PÁGINA

En esta clase utilizaremos el componente Link para hacer que nuestros enlaces no hagan que la página se recargue y funcione como una Single Page Application. Recuerda siempre que puedas utilizar Link en lugar de a para tener una mejor experiencia de usuario y que no recargue la página.

### ESTILANDO LAS PÁGINAS ACTIVAS

Reach Router nos agrega un atributo aria-current="page" en la página que esté activa en ese momento para que podamos estilarla, agregarle algún tipo de funcionamiento o decirle al usuario en donde se encuentra.

### RUTAS PROTEGIDAS

Con el método render props realizaremos rutas de autenticación para saber si el usuario ha iniciado sesión o no y podremos mostrar contenido dependiendo de las props que le estemos pasando.

## GESTIÓN DEL USUARIO

### MUTACIONES PARA REGISTRO

Context API es una característica que tiene React para poder pasar datos en nuestra aplicación sin necesidad de usar las Props.

Para crear un contexto vamos a importar el método createContext de la librería React. El contexto que creemos no va a dejar de ser un componente de React, por ello debe llevar mayúscula al inicio.

El Context que creemos nos va a proporcionar 2 componentes:

- Provider: componente que debe envolver a nuestra aplicación.
- Consumer: nos va a permitir acceder a las render props que declaremos en el Provider.

### MUTACIONES PARA REGISTRO

De momento nuestro formulario no está guardando la información de registro en ningún lado, para ello vamos a usar un Mutation de GraphQL para mandarle la información a nuestro backend y que nos regrese un JSON Web Token.

Para configurar esta Mutation vamos a crear un container llamado RegisterMutation.js con el siguiente código:

```javascript
  import React from ‘react’
  import { Mutation } from ‘react-apollo’
  import { gql } from ‘apollo-boost’

  const REGISTER = gql`
    mutation signup ($input: UserCredentials!) {
      signup (input: $input)
    }
  `

  export const RegisterMutation = ({ children }) => {
    return (
      <Mutation mutation={REGISTER}>
        {children}
      </Mutation>
    )
  }
```

### PERSISTIENDO DATOS EN SESSION STORAGE

De momento nuestra sesión se pierde cada que refrescamos nuestra aplicación, vamos a persistir la sesión utilizando window.sessionStorage dentro de nuestro método activateAuth, quedando:

```javascript
  activateAuth: token => {
    setIsAuth(true)
    window.sessionStorage.setItem('token', token)
  }
```

### HACER LIKE COMO USUARIO REGISTRADO

Un JSON Web Token (JWT) es un estándar abierto para crear tokens y asegurar que el envío de datos es confiable y seguro. Van a ser muy útiles para implementar la lógica de los likes pues solamente los usuarios autentificados podrán dar like.

Un JWT se conforma de 3 partes:

- Header: Es un objeto que define qué algoritmo y tipo tiene el token.
- Payload: La información que almacenamos en el token.
- Verify Signature: Una encriptación del header más el payload más tu llave secreta.

Para utilizar nuestro JWT necesitamos añadirlo al header authorization de las peticiones HTTP que hagamos con el texto Bearer [token].

Para que el ciente de apollo funcione es necesario añadir el requesto en la definición del cliente de apollo:

```javascript
  onError: error => {
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
```

## MEJORES PRACTICAS, SEO Y RECOMENDACIONES

### REACT HELMET

Las SPA no necesariamente tienen mal SEO como se hace pensar. React Helmet nos va a ayudar a manejar el SEO de nuestra aplicación para poder cambiar el texto del título

`npm i react-helmet`

```javascript
  import React from 'react'
  import { Helmet } from 'react-helmet'
  import { Div, Title, SubTitle } from './style'

  export const Layout = ({ children, title, subtitle }) => {
    return (
      <>
        <Helmet>
          {title && <title>{title} | Petgram</title>}
          {subtitle && <meta name='description' content={subtitle} />}
        </Helmet>
        <Div>
          {title && <Title>{title}</Title>}
          {subtitle && <SubTitle>{subtitle}</SubTitle>}
          {children}
        </Div>
      </>
    )
  }
```

### MIDIENDO EN PERFORMANCE DE NUESTRA APLICACIÓN Y USANDO REACT.MEMO

¡Los componentes sólo harán render si sus props han cambiado! Normalmente, todos los componentes de React en nuestro árbol pasarán por un render cuando se realicen cambios. Con PureComponent y React.memo(), podemos tener solo algunos componentes renderizados.

ejemplo:

```javascript
import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

const HomePage = ({ id }) => (
  <>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </>
)

export const Home = React.memo(HomePage, (prevProps, props) => prevProps.id === props.id)

```

La función que se pasa a React Memo sirve para indicarle que realice el renderizado en el caso de que las id cambien.

1. Compilar la aplicación en modo desarrollo utilizando `./node_modules/.bin/webpack --mode "development"`, así sabrá que se debe compilar en modo desarrollo; el resultado lo dejará en la carpeta dist.
2. Con **serve** podemos servir la compilación utilizando `npx serve dist -s` el parámetro s indica que es una **single page application**.
3. En el navegador vamos a ver la misma aplicación pero con un pequeño cambio.
4. Utilizando los devtools de React es posible hechar un vistazo a el performance y los componentes que se están volviendo a renderizar al grabar cierta acción.

### REACT.LAZY() Y COMPONENTE SUSPENSE

Suspense es un componente de React que nos va a permitir suspender algo cuando está en modo lazy(); y lazy(). El cual nos va a permitir importar un componente que no será cargado hasta que este sea llamado. De esta forma mejoraremos el tiempo de carga de nuestra aplicación enormemente.

```javascript
  import React, { useContext, Suspense } from 'react'
  import { Router, Redirect } from '@reach/router'
  import { Context } from './Context'
  import { Logo } from './components/Logo'
  import { Navbar } from './components/Navbar'
  import { GlobalStyle } from './styles/GlobalStyle'

  const NotFound = React.lazy(() => import('./pages/NotFound'))
  const Favs = React.lazy(() => import('./pages/Favs'))
  const Home = React.lazy(() => import('./pages/Home'))
  const Detail = React.lazy(() => import('./pages/Detail'))
  const User = React.lazy(() => import('./pages/User'))
  const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))

  export const App = () => {
    const { isAuth } = useContext(Context)

    return (
      <Suspense fallback={<div />}>
        <GlobalStyle />
        <Logo />
        <Router>
          <NotFound default />
          <Home path='/' />
          <Home path='/pet/:id' />
          <Detail path='/detail/:id' />
          {!isAuth && <NotRegisteredUser path='/login' />}
          {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
          {!isAuth && <Redirect noThrow from='/user' to='/login' />}
          {isAuth && <Redirect noThrow from='/login' to='/' />}
          <Favs path='/favs' />
          <User path='/user' />
        </Router>
        <Navbar />
      </Suspense>
    )
  }
```

### USANDO PROPTYPES PARA VALIDAR LAS PROPS

Las PropTypes serán un validador del tipo de datos que estamos recibiendo como props en nuestros componentes, el cual nos permitirá a que sea exclusivamente ese tipo de datos.
`npm i prop-types`

```javascript
  import React from 'react'
  import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
  import { Button } from './style'
  import PropTypes from 'prop-types'

  export const FavButton = ({ liked, likes, onClick }) => {
    const Icon = liked ? MdFavorite : MdFavoriteBorder
    return (
      <Button onClick={onClick}>
        <Icon size='32px' /> {likes} likes!
      </Button>
    )
  }

  FavButton.propTypes = {
    liked: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  }
```

Los proptypes sólo se ven en desarrollo, no e producción.

### PWA: GENERANDO EL MANIFEST

Usaremos webpack-pwa-manifest para crear nuestro manifest.json y que nuestra aplicación pueda ser compatible con todos los requerimientos de una PWA.

1. Correr script para ejecutar los estáticos en modo desarrollo ``npm run serve:dev
2. En las heramientas de desarrolo de Chrome hay una pestaña llamada **audits**.

Al correr el audit para PWA se valida que falta para ser una PWA

- Arreglo en caso de que el navegador no ejecute JavaScript.

  Esto se arregla con la etiqueta noscript:

  ```html
  <noscript>
    <h3>Está app necesita JavaScript para funcionar</h3>
  </noscript>
  ```

- Falta de Manifest:

  Para esto vamos a instalar un plugin de webpack para el manifest `npm i webpack-pwa-manifest`

  ```javascript
  const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
  const path = require('path')

  new WebpackPwaManifestPlugin({
    name: 'Petgram - Tu app de fotos de mascotas',
    short_name: 'Petgram 🐶',
    description: 'Con Petgram puedes añadir fotos de animales domésticos muy fácilmente',
    background_color: '#fff',
    theme_color: '#b1a',
    icons: [
      {
        src: path.resolve('src/assets/icon.png'),
        sizes: [96, 128, 192, 256, 384, 512]
      }
    ]
  })
  ```

  Es importante guardar el icono en la ruta especificada, webpack se encargará de generar los tamaños especificados

- Soporte offline:

  Utilizaremos workbox-webpack-plugin para agregar soporte online a nuestro proyecto, así como lo hacen Twitter e Instagram cuando entramos desde el navegador.

  `npm i workbox-webpack-plugin -D`

  ```javascript
    const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp('https://petgram-afisaacs-server-ptq2tov5n.now.sh/'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ```

  Luego de realizar esto es necesario hacer un proceso manual, no como el manifest que se inyecta automáticamente, por lo que se debe agregar lo siguiente al index.hmtl:

  ```html
  <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/service-worker.js')
        .then(registration => console.log('SW - Registrado'))
        .catch(error => console.log('SW error', error))
      })
    }
  </script>
  ```
