# la_demo
Projecto de demostración para El Parking

![logo](logo.png)

## El stack:
### Backend
[PHP7](https://www.php.net/) + [Laravel](https://laravel.com/) + [LightHouse](https://lighthouse-php.com/)

Un servidor escrito en [PHP7](https://www.php.net/) que expone la API con [GraphQL](https://graphql.org/)
usando [LightHouse](https://lighthouse-php.com/).

### Frontend
[React](https://reactjs.org/) + [Redux](https://redux.js.org/) + [Apollo](https://www.apollographql.com/)

La funcionalidad de la web se implementa con [React](https://reactjs.org/) embebido en 
[Laravel](https://laravel.com/) usando [Mix](https://github.com/JeffreyWay/laravel-mix) para su instalación
y configuración.

Los estados intermedios para la gestión de la entrada del usuario se gestionan usando [React Hoocks](https://reactjs.org/docs/hooks-intro.html),
mientras que la información proveniente de la API se guarda de forma centralizada en un almacén de [Redux](https://redux.js.org/).
Esto se hace así para evitar hacer sobre-ingeniería para aspectos básicos y mantener el código sencillo.

## Testing

## Ejecutando el proyecto
**Requisitos**

| Dependencia       | Version     |
| :------------- | :----------: |
|  PHP | x   |
| Node   | x |

### De forma local
### Desplegando en Heroku
___
## The stack:
### Backend
[PHP7](https://www.php.net/) + [Laravel](https://laravel.com/) + [LightHouse](https://lighthouse-php.com/)

Serverside code written in [PHP7](https://www.php.net/) with an API exposed through [GraphQL](https://graphql.org/)
using [LightHouse](https://lighthouse-php.com/) implementation.

### Frontend
[React](https://reactjs.org/) + [Redux](https://redux.js.org/) + [Apollo](https://www.apollographql.com/)

Client-side functionality is implemented as an embbeded [React](https://reactjs.org/) app in
[Laravel](https://laravel.com/) using [Mix](https://github.com/JeffreyWay/laravel-mix) for webpack installation
and configuration.

While intermediate state (for user input management) is being held at component level using [React Hoocks](https://reactjs.org/docs/hooks-intro.html),
app data comming from the API is held in a centralized [Redux](https://redux.js.org/) store.
This strategy aims at lowering the amount of code involved and simplifying state management.

## Testing

## Executing the project
**Requirements**

| Dependency      | Version     |
| :------------- | :----------: |
|  PHP | x   |
| Node   | x |

### Localy
### Deploying on Heroku
