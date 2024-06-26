# stuRENT

**stuRENT** is a room finding website, designed for university students, allows hosts to list single rooms, sublets, and flats, while students can filter and rent these accommodations based on type, gender, and university. stuRENT is fully **Responsive**.

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

<a name="feat"></a>
# ⚙️ Features

### 1. User Identity and Authentication Flow

  - **User Registration**: Enable customers to create accounts.
  - **User Authentication**: Implement JWT-based authentication mechanisms to secure user sessions.
  - **Google Authentication**: Integrate google authentication using google-0auth2.
  - **User Profiles**: Enable users to view and update their profiles.

### 2. Listing and Browsing

  - **Host Listings**: Hosts can post single rooms, sublets, and flats.
  - **Detailed Listings:**: Each listing includes photos, location, description, and features.

### 3. Viewing and Interaction

  - **Wishlist management**: User can save any listing to the wishlist for his next ordering.
  - **Detailed View**: Users can click on a listing to see more details, including recommended rooms.
  - **Dark and Light Mode**: Provides an option to switch between dark and light themes for better user experience.

### 4. Security

  - **JWT Tokenization**: Implement robust JSON Web Token mechanisms to fortify authentication.

### 5. Validation

  - **Schema Validation**: Implemented **zod** schema validation with integrating **React Hook Form** in Login and Registration form.

### 6. Pagination and Filtering

  - **Paginating in listings**: Added pagination for fetching more listings.
  - **Listings Filtering**: Implmented filter listings by single, sublet, flat, gender, area, university name.

<a name="process"></a>
## 🔄 The Processes I have followed for creating the project.

  1. Then Dockerize the application for running in using docker.

  3. Then I had implmented different pages file and folder structure.
    
  4. After that I am working on home page UI with all component which includes header.

  5. Implement modals UI which includes login, registration, filtering modals, create listing modal etc.

  6. Added single listings page UI for showing listing details.

  7. Added test data with data types where I needed for example for listings, universities, areas etc which help me later when I am integrating with the backend.

  8. Added Redux for state management and include all the global state in Redux which includes Modals and others states.

  9. Integrated Register, Login, Logout with backend and frontend.

  10. Added React Hook Form and zod validation in Register and Login modals.
    
  11. Added React Hook Form and zod validation in Create Listing modals.

  12. Integrated Google login.

  13. Make website responsive for mobiles and tablet devices.

<a name="learning"></a>
## 📚 What I have Learned

  During this project I have faced many problems and overcome those for completing my ideas to the project.
  
  - **Advanced Authentication Techniques**: Gained experience in implementing manual user authentication and integrating Google OAuth for secure and user-friendly login options.

### Discovering New Tools:

  - **Next.js**: Learned the use of Next.js for server-side rendering, enhancing the performance and SEO of the website.
  - **React Hook Form and Zod**: I have studied about form validation using React Hook Form and Zod and implemented the schema types.
  - **Shadcn and Tailwind CSS**: Learned to create responsive and aesthetically pleasing user interfaces using Shadcn and Tailwind CSS, providing a great user experience across devices.
  - **RTK Query**: Learned how use RTK Query to handle API integrations, providing a seamless and efficient data fetching mechanism.

### Token Authentication:

  - **JWT**: How jwt authentication exactly works and how to use this in every request.

### Functionalities:

  - **Dynamic Filtering and Listing Management**: Developed dynamic filtering options to enhance the browsing experience, allowing users to filter listings by type, gender, and university.
  - **Enhanced User Experience with Dark and Light Mode**: Implemented dark and light mode themes to cater to user preferences, enhancing overall user experience.

### Dockerizing

  - **Docker**: Learned how to dockerize a next.js application.

<a name="improvements"></a>
## 💭 How can it be improved?

  - Implement advanced search filters such as price range, room size, and amenities (e.g., Wi-Fi, parking, furnished).
  - Add a feature allowing students to leave reviews and ratings for listings and hosts to build trust and provide insights to potential renters.
  - Integrate a map view using Google Maps API to display the location of listings, making it easier for users to find properties in specific areas.
  - Implement email and in-app notifications for new listings, updates to favorite listings, and messages from hosts.


<a name="video"></a>
## 🍿 Demo Video

  - Will be provided soon
