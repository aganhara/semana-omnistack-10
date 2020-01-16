const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

/**
 * Tipos de parâmetros:
 * Query params: req.query (Filtros, ordenação, paginação)
 * Route params: req.params (Identificar um recurso na alteração ou remoção)
 * Body: req.body (Dados para criação ou alteração de um registro)
 */
const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;