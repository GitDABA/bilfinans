/**
 * Custom server configuration for Next.js app
 * Uses the port defined in the project's server-config.js
 */

import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import serverConfig from '../../server-config.js';

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = serverConfig.ports.web; // Using the port from our config file

// Initialize Next.js
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Parse the URL
      const parsedUrl = parse(req.url, true);
      
      // Let Next.js handle the request
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('Internal server error');
    }
  })
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Next.js web app ready on http://${hostname}:${port}`);
    });
});
