# Full-Stack JS Starter Template for Render.com

```
/
  |-- client (vite + react frontend)
  |-- server (express backend)
```

## Development

Run from the root folder:

```sh
npm run dev
```

The client dev-server runs on port 3000. Open http://localhost:3000 in your browser.

The server runs on port 3001 by default. Set the `PORT` environment variable to change that.

## Deploy to render.com

1. Create a new Web Service
2. Connect the git repository
3. Give it a unique name
4. Make sure the runtime is set to Node
5. Set the Build Command to `npm install && npm run build`
6. Set the Start Command to `npm start`
