![logo](logo.png)

[![Netlify Status](https://api.netlify.com/api/v1/badges/bd844105-ed37-4be9-beab-0d106aaafeae/deploy-status)](https://app.netlify.com/sites/lademo/deploys)

Webapp para el projecto de demostración para _El Parking_.
___
Webapp for job application at _El Parking_.
## El stack:
[React](https://reactjs.org/) + [Redux](https://redux.js.org/) + [Apollo](https://www.apollographql.com/)

La funcionalidad de la web se implementa con [React](https://reactjs.org/) embebido en 
[Laravel](https://laravel.com/) usando [Mix](https://github.com/JeffreyWay/laravel-mix) para su instalación
y configuración.

Los estados intermedios para la gestión de la entrada del usuario se gestionan usando [React Hoocks](https://reactjs.org/docs/hooks-intro.html),
mientras que la información proveniente de la API se guarda de forma centralizada en un almacén de [Redux](https://redux.js.org/).
Esto se hace así para evitar hacer sobre-ingeniería para aspectos básicos y mantener el código sencillo.

## Ejecutando el proyecto
**Requisitos**

| Dependencia       | Version     |
| :------------- | :----------: |
|  PHP | x   |
| Node   | x |

### Servidor local para desarrollo
### Traspilación del proyecto
### Ejecución de los tests

## Despliegues en Netlify
___
## The stack:
[React](https://reactjs.org/) + [Redux](https://redux.js.org/) + [Apollo](https://www.apollographql.com/)

Client-side functionality is implemented as an embbeded [React](https://reactjs.org/) app in
[Laravel](https://laravel.com/) using [Mix](https://github.com/JeffreyWay/laravel-mix) for webpack installation
and configuration.

While intermediate state (for user input management) is being held at component level using [React Hoocks](https://reactjs.org/docs/hooks-intro.html),
app data comming from the API is held in a centralized [Redux](https://redux.js.org/) store.
This strategy aims at lowering the amount of code involved and simplifying state management.

## Executing the project
**Requirements**

| Dependency      | Version     |
| :------------- | :----------: |
|  PHP | x   |
| Node   | x |

### Local development server
### Transpiling the source code
### Running tests
## Deployments on Netlify
