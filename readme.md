# Lekce 2
## Node.js and Nginx Example

- bare-minimum, low level aplikace na testovani jak funguje komunikace mezi Client <--> Server (HTTP)

## Prerequisites

- Node.js installed on your machine. You can download it [here](https://nodejs.org/).
- Nginx installed on your machine. You can follow the installation instructions for [Ubuntu/Debian](https://nginx.org/en/linux_packages.html#Ubuntu)

## Notes

- MVC vs MVMM
- Monorepo is used always for scalable apps

**This is what gets sent when your browser makes any request to a server on web.**
>
>> {"headers":{"host":"localhost:3000","sec-fetch-site":"none","connection":"keep-alive","upgrade-insecure-requests":"1","sec-fetch-mode":"navigate","accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15","accept-language":"en-US,en;q=0.9","sec-fetch-dest":"document","accept-encoding":"gzip, deflate"}}

## Setup

- Pri zakladani nove aplikace od zacatku je postup nasledujici:

```
npm init
```

Nainstaluj balicky, ktere budeme pouzivat..

```

``npm i express`` && ``npm i dotenv``

```

- Open a browser and navigate to:

    ``http://localhost:3000/json``

    Should get something like: 
    > {"message":"Hello from Nginx!"}

    ``http://localhost:3000/html``
    > Hello from Nginx in HTML! *<h1>Hello from Nginx in HTML<h1>*
    

    Or add more your custom responses

    ``http://localhost:3000/image``
