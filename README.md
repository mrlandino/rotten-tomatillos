# Rotten Tomatillos

![App Front Page](./public/main-screen.png)

A movie database application where users can browse various movies and view details/info about the movie along with official cinematic trailers and teasers.

## Table of Contents

- [Authors](#authors)
- [Tech Stack](#tech-stack)
- [API Reference](#api-reference)
- [GIFs](#gifs)
- [Running Tests](#running-tests)
- [Running Locally](#running-locally)
- [Deployment](#deployment)
- [Additional Resources](#additional-resources)

## Authors

- [Ross Landino @mrlandino](https://www.github.com/mrlandino)
- [Zachary Saile @zwsaile](https://www.github.com/zwsaile)


## Tech Stack

**Client:** React, JavaScript, HTML, CSS, Sass, NPM

**Testing:** Cypress

**Server:** Heroku API

**Accessibility:** WAVE, Lighthouse


## API Reference

#### Get all movies

```http
  GET https://rancid-tomatillos.herokuapp.com/api/v2/movies
```

#### Get a single movie

```http
  GET https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Get a movie's videos

```http
  GET https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos
```


## GIFs

![App In Use](./public/rotten-tom.gif)


## Running Tests

To run end-to-end tests, run the following command

```bash
  npm run cypress
```


## Run Locally

Clone the project

```bash
  git@github.com:mrlandino/rotten-tomatillos.git
```

Go to the project directory

```bash
  cd rotten-tomatillos
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Deployment

- https://rotten-tomatillos.netlify.app/

## Additional Resources

- [Figma Wireframe](https://www.figma.com/file/hMy4gk4yspX1CiUwYwxACy/Rotten-Tomatillos)
