import http from 'node:http';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 5000;
let indexData;
let productData;

fs.readFile(`${__dirname}/theme/overview.html`, 'utf8', (err, data) => {
  if (err) throw err;
  indexData = data;
});
fs.readFile(`${__dirname}/theme/product.html`, 'utf8', (err, data) => {
  if (err) throw err;
  productData = data;
});

http
  .createServer((req, res) => {
    let status = 200;
    if (req.url === '/' || req.url === '/overview') {
      res.writeHead(status, {
        'content-type': 'text/html',
        'X-Powered-by': 'node.j',
      });
      res.end(indexData);
    } else if (req.url === '/product') {
      res.writeHead(status, {
        'content-type': 'text/html',
        'X-Powered-by': 'node.j',
      });
      res.end(productData);
    } else {
      status = 404;
      res.writeHead(status, { 'content-type': 'text/html' });
      res.end('<h1>Page not found</h1>');
    }
  })
  .listen(port, () => {
    console.log(`Listening on ${port}`);
  });
