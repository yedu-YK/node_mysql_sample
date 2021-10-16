const teamMember = require('../controllers/teamMembers');
const { idSchema, teamMemberSchema } = require('../middlewares/schema');
const { createValidator } = require('express-joi-validation');
const validator = createValidator();


module.exports = app => {
    app.get('/teamMembers', teamMember.findAll)
    app.get('/teamMember/:id',validator.params(idSchema),teamMember.findOne)
    app.post('/teamMember',validator.body(teamMemberSchema),teamMember.addNew)
    app.delete('/teamMember/:id',validator.params(idSchema),teamMember.deleteOne)
    app.put('/teamMember/:id',validator.params(idSchema),teamMember.updateOne)
}