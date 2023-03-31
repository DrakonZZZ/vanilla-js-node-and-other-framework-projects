import http from 'node:http';
import { URL } from 'node:url';
import Files from './modules/files.js';
import ReplaceTemplate from './modules/replaceTemplate.js';

const replaceTemplate = new ReplaceTemplate();
const files = new Files();
const jsonData = files.json();
const tempIndexPage = files.tempFile();
const indexPage = files.index();
const productPage = files.product();

const port = 5000;

http
  .createServer((req, res) => {
    let status = 200;
    const baseUrl = req.protocol || 'http' + '://' + req.headers.host + '/';
    const { pathname, searchParams } = new URL(req.url, baseUrl);

    res.writeHead(status, {
      'content-type': 'text/html',
      'X-Powered-by': 'node.j',
    });
    if (req.url === '/' || req.url === '/overview') {
      const productListItems = jsonData
        .map((item) => replaceTemplate.replace(tempIndexPage, item))
        .join('');

      const indexFinalPage = indexPage.replace(
        /{%ProductList%}/g,
        productListItems
      );

      res.end(indexFinalPage);
    } else if (pathname === '/product') {
      res.writeHead(status, {
        'content-type': 'text/html',
        'X-Powered-by': 'node.j',
      });
      const product = jsonData[searchParams.get('id')];
      const output = replaceTemplate.replace(productPage, product);
      res.end(output);
    } else if (req.url === '/api') {
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify(jsonData));
    } else {
      status = 404;
      res.writeHead(status, { 'content-type': 'text/html' });

      res.end('<h1>Page not found</h1>');
    }
  })
  .listen(port, () => {
    console.log(`Listening on ${port}`);
  });
