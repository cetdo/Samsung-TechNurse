# Technurse API application
REST API developed the consume recipients to feed their applications for aptitude tests.

The application has the following packages:.

1. Bodyparser
2. Authentication JWT
3. CORS
4. Lucid ORM
5. Migrations and seeds

### Install packages from yarn or npm

```js
yarn install
```

or

```js
npm install
```

### Migrations

Copy .env.example to .env 

```js
cp .env.example .env
```

Edit .env with settings from your database and choose mysql for connection type

Run the following command to run startup migrations.

```js
node ace migration:run --force
node ace seed --force
```

## Start server

```js
node server.js
```

## Routes configured into API
```js
/api/auth/login
/api/auth/register
/api/auth/nurses
/api/auth/nurses/:id
/api/auth/user
```
