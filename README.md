# Movie Flip

This is a React app built with Vite.js that uses The Movie Database API to display movie information. The app is styled using MUI.

## Live Demo

You can view a live demo of the app at https://movie-flip-pi.vercel.app/.

## Getting Started

To get started with the app, simply clone the repo and run `npm install` to install the required dependencies.

```bash
git clone https://github.com/your-username/movie-flip.git
cd movie-flip
npm install
```

After the installation is complete, you can run npm start to start the app in development mode.

```bash
npm run dev
```

The app should now be running at http://localhost/.

## API

The Movie Flip app uses The Movie Database API to fetch movie information. To use the app, you will need to create an account on the [TMDb website](https://www.themoviedb.org/) and generate an API key.

After you have generated your API key, create a `.env.local` file in the root directory of the project and add the following line:

```bash
VITE_API_KEY=your-api-key-here
```

Replace `your-api-key-here` with your actual API key.

## Credits

The app uses the following libraries and APIs:

- [React](https://reactjs.org/)
- [Vite.js](https://vitejs.dev/)
- [MUI](https://mui.com/)
- [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction)
