import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class Files {
  constructor() {
    this.jsonData = '';
    this.indexPage = '';
    this.tempIndexPage = '';
    this.productPage = '';
  }

  json() {
    const data = fs.readFileSync(
      path.join(__dirname, '..', 'data', 'data.json'),
      'utf8'
    );
    this.jsonData = JSON.parse(data);
    return this.jsonData;
  }

  index() {
    this.indexPage = fs.readFileSync(
      path.join(__dirname, '..', 'theme', 'overview.html'),
      'utf8'
    );
    return this.indexPage;
  }

  tempFile() {
    this.tempIndexPage = fs.readFileSync(
      path.join(__dirname, '..', 'theme', 'template-list.html'),
      'utf8'
    );
    return this.tempIndexPage;
  }
  product() {
    this.productPage = fs.readFileSync(
      path.join(__dirname, '..', 'theme', 'product.html'),
      'utf8'
    );
    return this.productPage;
  }
}

export default Files;
