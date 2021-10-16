const employee = require('../controllers/employees');
const { idSchema, employeeSchema } = require('../middlewares/schema');
const { createValidator } = require('express-joi-validation');
const validator = createValidator();



module.exports = app => {
    app.get('/employees', employee.findAll)
    app.get('/employee/:id',validator.params(idSchema), employee.findOne)
    app.post('/employee',validator.body(employeeSchema),employee.addNew)
    app.delete('/employee/:id',validator.params(idSchema),employee.deleteOne)
    app.put('/employee/:id',validator.params(idSchema),employee.updateOne)
}