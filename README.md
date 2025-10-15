# Docere App Screens

A Node.js Express application for prototyping web features with static file serving capability.

## Project Structure

```
docere-app-screens/
├── app.js              # Express server configuration
├── package.json        # Project dependencies and scripts
└── public/            # Static files directory
    ├── index.html     # Main HTML file
    ├── style.css      # CSS styles
    └── script.js      # Frontend JavaScript
```

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

   For development with auto-reload:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Development

- Static files are served from the `public` directory
- Edit files in `public` folder to modify the frontend
- The server will automatically reload when using `npm run dev`
