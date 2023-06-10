import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
require('dotenv').config();

const router = express.Router();

// Specify the path to the Swagger YAML file
const swaggerFilePath = path.resolve(__dirname, 'docs.yaml');

// Load the Swagger YAML file 
const swaggerDocument = YAML.load(swaggerFilePath);

// var options = {

// };

var options = {
    customSiteTitle: "Bitcoin - HTTP API Doc",
    customCss: `
      .topbar-wrapper img {
        content: url("${process.env.APP_URL}/public/logo.png");
        max-width : 90px ;
      }
      .topbar-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      .topbar-wrapper a {
        max-width: 90px ;
      }
    `,
    customfavIcon: `${process.env.APP_URL}/public/favicon.png`
};



// Serve the Swagger documentation using swagger-ui-express
router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument, options));

export default router;
