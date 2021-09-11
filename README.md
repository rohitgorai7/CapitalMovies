CapitalMovies - Live Website [Link](https://capital-movies.netlify.app/)

# For Creating Login Authentication using Firebase

Create New Project

Then Create Login Authentication using Email and Password

Copy the CDN to your React Project, Here I have made fire.js inside my /src/components for my the Firebase API

# To Use The Movie DB API

Create Account

Go to API

Now go to Developers

You Need to get Popular, Latest, Favourite Movies from TMDB API

For the Favourites Movie You need Account_ID

1. Get your Request Token [docs](https://api.themoviedb.org/3/authentication/token/new?api_key=blahblahblah)

Plug that URL into Postman as a GET request and run it.

You should now have your Request Token.

2. Create your [session_id](https://api.themoviedb.org/3/authentication/session/new?api_key=blahblahblah)

Add that to Postman as a POST Request. Also within Postman's Body tab, you need to add your request_token as raw JSON.

It will look something like the following:

{
  "request_token": "xxxxxxxxxxxxxx"
}
Run the request and should get back your session_id.

3. Retrieve your account details [docs](https://api.themoviedb.org/3/account?api_key=blahblahblah&session_id=xxxxxxxxxxx)
Back in Postman add your URL as GET request.


This should return some JSON, and within it the id which is your account_id:

{
    "avatar": {
        "gravatar": {
            "hash": "00000000000000000"
        },
        "tmdb": {
            "avatar_path": null
        }
    },
    "id": 1234567,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "",
    "include_adult": true,
    "username": "meme"
}

# (Important)Also, It does not matter how many accounts you create in this App, all the Favourites movies will be same no matter which account you are are logged in beacause we are the one same Favourites API for all the users.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

