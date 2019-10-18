## PROJECT SETUP

* Typescript
* Tsc-watch

### Typescript setup
* Install typescript
  npm install typescript
* typescript config
  Tsc-watch

### Tsc-watch setup
* Install tsc-watch
  npm install tsc-watch
  npx tsc --init --moduleResolution node --resolveJsonModule --target es6 --noImplicitAny --sourceMap --lib es2017, dom --outDir dist

### Express setup
* install express
    npm install express @types/express

### Server setup

### Middleware setup

### Routes setup
#### Notes
* Each route is defined as an object with path="/", method="get", handler=(req, res) and are exported as an array of objects

### Error handling setup
#### Errors to handle
* unhandled promise and uncaught exceptions errors
* sync and async errors
* client and server errors
#### Notes
* define error-handlers in middleware folder
* create a file to hold error-handler logic in utils folder
* create httperror class



NOTES:
* NodeJS do not support ES5 modules.