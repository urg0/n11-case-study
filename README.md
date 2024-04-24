# n11-case-study (e-commerce dashboard)

## author: Ulaş Rotinda Güler

This project is a demo e-commerce Dashboard. The project exchanges data using a mock API created by json-server. All data within the project is provided by the mock API.

## Setting Up the Development Environment

To run this project, you need to have `Node.js` and `npm` installed on your computer. If not installed, you can download and install from [Node.js](https://nodejs.org/).

After downloading the project files, open the terminal in the directory where the project is located and run the following command:

```bash
yarn install
```

This command will install the dependencies of the project. After the dependencies are installed, you can run the following command to bring up the project with the mock API:

Then you can run the following command to bring up the project:

```bash
yarn start
```

After bringing up the project, you can see the project by going to [http://localhost:3000](http://localhost:3000) in your browser.

## Technologies Used

- [React](https://reactjs.org/)
- [React Router Dom](https://reactrouter.com/)
- [React Query](https://react-query.tanstack.com/)
- [Chart.js](https://www.chartjs.org/)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)
- [ESLint](https://eslint.org/)

## Project Structure

The project has the following structure:

- N11-CASE-STUDY/: The root folder of the project.

  - `public`/: Contains the static assets that will be used at runtime.
  - `src`/: The source directory where the main codebase is located.
  - - `assets`/: This directory holds all the resources like images, fonts, etc.
  - - `components`/: Folder where reusable UI components are stored.
  - - `constants`/: Contains files that define constant values for the application.
  - - `layouts`/: Holds the layout components that form the structure of the application views.
  - - `pages`/: Directory containing the components that represent full pages in the application.
  - - `utils`/: Utility functions and helpers for the application are within this folder.
  - - App.js: The main React component that acts as the root of your application.
  - - index.js: The entry file to the application, where the React app is initialized.
  - - index.scss: The primary stylesheet file for the application.
  - - routes.js: Defines the routes for the application.
  - config-overrides.js: Used to customize configurations without ejecting the create-react-app.
  - yarn.lock: Yarn lockfile to ensure consistent installations across machines.

## Unit Test

I was planned to write unit tests for the project. However, I could not write unit tests due to time constraints.

## Notes

#### UI and UX

The application is designed to be used on mobile devices as well.

#### Communication with API

The `React Query` library was used for server-side state management. All API requests were made in the files located in the `services` folder. When API requests are successful or return an error, a notification is shown to the user. A library like `Axios` was not used as there was no need for any interceptor.

#### Router

The application was routed using the `React Router Dom` library. These are pages within the application:

- Login page
- Register page
- Dashboard page
- Error page

#### Title

Page titles change dynamically according to the page content. Page titles were dynamically changed using the `react-helmet-async` library.

## Challenges I Encountered

During the time I was working on this case study, I also had a full-time ongoing job and senior year university commitments. I tried to manage my schedule to make sure the project met all the requirements with best practices and ran smoothly. But with my schedule (work + school), it wasn't really possible for me to dedicate the time I wanted to. I progressed as much as I could when I had the opportunity, but I didn't reach the level I wanted, and I don't think it fully reflects my abilities. I wanted to mention this because it affected the process.
