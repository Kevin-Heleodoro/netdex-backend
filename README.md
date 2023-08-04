<a name="readme-top"></a>
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.khoury.northeastern.edu/NEU-CS5610-SU23/NetDex-backend">
    <img src="img/readme/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">NetDex Backend</h3>

  <p align="center">
    This project serves as the back end for the NetDex application. It consists of an Express server that interacts with a Mongo database to provide the CRUD functionality for the application.
    The NetDex application provides the end user a way to organize their professional network in a simplistic and easy to understand interface. Think of your favorite professional social media platform. Now remove the social media portion of it. This is a tool for the user to maintain contact with their network without all the frills that come with being on a social media platform.
    <br/><br/>"Contacts, without the contact."<br/><br/>
    Link to <a href="https://github.khoury.northeastern.edu/NEU-CS5610-SU23/NetDex-frontend">NetDex frontend</a>
    <br/> 
    <br />
    <a href="https://github.khoury.northeastern.edu/NEU-CS5610-SU23/NetDex-backend"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- <a href="https://movietime-backend-heleo.uw.r.appspot.com/api/v1/movies">View Demo: Get all movies</a> -->
    ·
    <a href="https://github.khoury.northeastern.edu/NEU-CS5610-SU23/NetDex-backend/issues">Report Bug</a>
    ·
    <a href="https://github.khoury.northeastern.edu/NEU-CS5610-SU23/NetDex-backend/issues">Request Feature</a>

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->

### Built With

-   [![Node][Node.js]][Node-url]
-   [![Express][Express.js]][Express-url]
-   [![MongoDB][MongoDB]][Mongo-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Ensure you have the latest version of npm installed.

```sh
npm install npm@latest -g
```

Ensure you have version 18.15.0 of node installed through NVM.

```sh
nvm install 18.15.0
```

Ensure you have the latest version of yarn installed.

```sh
npm install -g yarn
```

Ensure you have the latest versions of the following installed:

-   [MongoDB Community Edition](https://docs.mongodb.com/manual/administration/install-community/)
-   [MongoDB Compass](https://docs.mongodb.com/compass/current/install/)
-   [Insonmia](https://insomnia.rest/)

### Installation

1. Clone the repo
    ```sh
    git clone https://github.khoury.northeastern.edu/NEU-CS5610-SU23/KevinHeleodoro-backend.git
    ```
2. Install NPM packages
    ```sh
    yarn install
    ```

### Running locally

1. Start the server
    ```sh
    yarn dev
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- ROADMAP -->

## Roadmap

### Release 1

-   User Routes:
    -   Create a User
    -   Get a User
    -   Update a User
-   Contact Routes:
    -   Create a Contact
    -   Get a Contact
    -   Get all Contacts for a User
    -   Update a Contact
    -   Add a Note to a Contact
    -   Delete a Contact

See the [open issues](https://github.khoury.northeastern.edu/NEU-CS5610-SU23/NetDex-backend/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Kevin Heleodoro - [@Golden_Sun_Kev](https://twitter.com/Golden_Sun_Kev) - heleodoro.k@northeastern.edu

Project Link: [https://github.khoury.northeastern.edu/NEU-CS5610-SU23/NetDex-backend](https://github.khoury.northeastern.edu/NEU-CS5610-SU23/NetDex-backend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

-   [README badges](https://dev.to/envoy_/150-badges-for-github-pnk)
-   [SuperTest](https://github.com/ladjs/supertest)
    <!-- * []() -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/kevin-heleodoro
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/
[MongoDB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[Mongo-url]: https://www.mongodb.com/docs/
