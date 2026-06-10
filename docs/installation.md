# Installation

## Requirements

* Node.js
* npm
* Docker

## Local development

Clone the repository:

```bash
git clone https://github.com/sofie-saf/2INF-festival-eksamen.git
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build production version:

```bash
npm run build
```

## Docker

Build image:

```bash
docker build -t 2inf-festival .
```

Run container:

```bash
docker run -d -p 8080:80 --name festival-web 2inf-festival
```
