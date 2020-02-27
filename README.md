# Fungry.

> An app to render reviews for all your food thoughts.

## Table of Contents

1. [Requirements](#requirements)
2. [Development](#development)
3. [Features](#features)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 8.15.1
- Mongo 4.2.0
- Google API key

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
npm run build
npm run start
```

## Features

Features include:
  - Input form to submit reviews
    - implements Google Places API for geo search
    - drop down input box for ratings
    - renders reviews in reverse chronological order
    - each review lists the establishment name and links it to their google page
    - reviews can be easily deleted