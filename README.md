# Askobar Token Supply API
This API fetches Askobar's Token (ASKO) total supply, circulating supply and locked tokens.

## Installation

Use the package manager [yarn](https://classic.yarnpkg.com/en/docs/install/).

To install dependencies:

```bash
yarn
```

## Running the project

To start the project:

```bash
yarn start
```

To run the project with nodemon's live reload:

```bash
yarn dev
```

To run the project's tests:

```bash
yarn test
```

## Total Supply
**You get:** ASKO's total supply amount.

**Request:**
```json
GET /totalSupply HTTP/1.1
```
**Successful Response:**
```json
HTTP/1.1 200 OK
Content-Type: application/json

{
   "value": "123456"
}
```
**Failed Response:**
```json
HTTP/1.1 500 Internal Server Error
Content-Type: application/json

{
  "message": "An unexpected error has ocurred",
}
```

## Circulating Supply
**You get:** ASKO's circulating supply amount.

**Request:**
```json
GET /circulatingSupply HTTP/1.1
```
**Successful Response:**
```json
HTTP/1.1 200 OK
Content-Type: application/json

{
   "value": "123456"
}
```
**Failed Response:**
```json
HTTP/1.1 500 Internal Server Error
Content-Type: application/json

{
  "message": "An unexpected error has ocurred",
}
```

## Locked Tokens
**You get:** ASKO's locked tokens amount.

**Request:**
```json
GET /lockedTokens HTTP/1.1
```
**Successful Response:**
```json
HTTP/1.1 200 OK
Content-Type: application/json

{
   "value": "123456"
}
```
**Failed Response:**
```json
HTTP/1.1 500 Internal Server Error
Content-Type: application/json

{
  "message": "An unexpected error has ocurred",
}
```

## Response Format

All endpoint responses from this API can be request in different formats.

To override the default `application/json` response format, simply pass `format` URL parameter with one of the currently supported alternative formats:

```json
GET /circulatingSupply?format=text HTTP/1.1
```

### Valid format values:

* `text`: text/plain