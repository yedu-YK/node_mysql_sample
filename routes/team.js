const team = require('../controllers/team');
const { idSchema, teamSchema } = require('../middlewares/schema');
const { createValidator } = require('express-joi-validation');
const validator = createValidator();


module.exports = app => {
    app.get('/teams', team.findAll)
    app.get('/team/:id',validator.params(idSchema),team.findOne)
    app.post('/team',validator.body(teamSchema),team.addNew)
    app.delete('/team/:id',validator.params(idSchema),team.deleteOne)
    app.put('/team/:id',validator.params(idSchema),team.updateOne)
    app.get('/team/members/:id',validator.params(idSchema), team.getTeamDetails)
}