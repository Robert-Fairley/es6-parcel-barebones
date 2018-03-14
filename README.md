# ES6 Parcel Boilerplate

### Setup

You'll need a current version of NPM installed as well as Parcel:

https://www.npmjs.com/

https://parceljs.org/

Install dependencies:

```shell
npm install
```

### Run

To run a hot-reload development version:

```shell
npm start
```

### Build

To build for production:

```shell
npm run build
```

## Tests

To run unit tests:

```shell
npm test
```

---

### Docker Container

To run the Docker image you can either pull the image from DockerHub:
```shell
docker pull robertfairley/es6-parcel-barebones

docker run -p [PORT]:1234 --name [LOCAL_NAME] robertfairley/es6-parcel-barebones
```

Or you can build the image file from this folder so you can view changes you've made
within the Docker container environment.

1. Clone this repo.
2. Build the image:
```shell
docker build -t [IMAGE_NAME]
```
3. Run the container:
```shell
docker run -p [PORT]:1234 --name [LOCAL_NAME] [IMAGE_NAME]
```

