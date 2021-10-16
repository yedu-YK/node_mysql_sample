const company = require('../controllers/company');
const { idSchema, companySchema } = require('../middlewares/schema');
const { createValidator } = require('express-joi-validation');
const validator = createValidator();

module.exports = app => {
    app.get('/companies', company.findAll)
    app.get('/company/:id', validator.params(idSchema), company.findOne)
    app.post('/company', validator.body(companySchema), company.addNew)
    app.delete('/company/:id', validator.params(idSchema), company.deleteOne)
    app.put('/company/:id', validator.params(idSchema), company.updateOne)
}