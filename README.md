# stuRENT

**stuRENT** is a room finding website, designed for university students, allows hosts to list single rooms, sublets, and flats, while students can filter and rent these accommodations based on type, gender, and university.

## Table of contents
  1. [ Technologies ](#tech)
  2. [ Requirements ](#req)
  3. [ How to run the project ](#run)
  4. [ Features ](#feat)
  5. [ Process ](#process)
  6. [ What I have learned ](#learning)
  7. [ How it can be improved ](#improvements)
  8. [ Demo Video ](#video)

<a name="tech"></a>
## 📦 Technologies

  - `NextJS`
  - `TypeScript`
  - `Tailwind CSS`
  - `Shadcn`
  - `Redux Toolkit`
  - `Rtk Query`
  - `React Toastify`
  - `Google 0Auth`
  - `Zod`
  - `React Hook Form`
  - `Docker`

<a name="req"></a>
## ✅ Requirements

- [Node](https://nodejs.org/en) (Version 18.18.0 or higher)
- [NPM](https://www.npmjs.com/) (The Node.js package manager. Installed with Node.js)

<a name="run"></a>
# 🚦 How to run the project

  ### Clone the repository
  - Clone this repository and cd into the project directory:
    ```bash
    git clone https://github.com/moinulhossainmahim/sturent-ui.git
    cd sturent-ui
    ```
  ### Update Environment Variables
  - Replace `env.example` file to `.env.local`
  - Create new apps in google console and config the URL's and save the **ClientId**
  - Update env environment variables
    ```bash
      GOOGLE_CLIENT_ID="Your Google App Client ID"
    ```
  
  ## Manually

  ### Install Dependencies
  - Run `npm install` inside the main project folder to install all dependencies from **NPM**.

  ### Start the application
  - 
    ```bash
      npm run dev
    ```
  ## Using Docker
  - **Install Docker First**

  - Check the official [Docker](https://docs.docker.com/engine/install) documentation for information how to install Docker on your operating system. And then install Docker and supporting tools.

  - Build the docker images
    ```bash
    docker-compose build
    ```
  - Start the containers
    ```bash
    docker-compose up
    ```

  - **If everyting setup correctly and your containers are running then you will get the application running in [localhost:3000](http://localhost:3000)**

  - **Update port mappings in `docker-compose.yml` file if you want to run in different port**
