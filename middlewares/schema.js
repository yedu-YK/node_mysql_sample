const Joi = require('joi');

const idSchema = Joi.object({
    id: Joi.number().integer().required()
})
const companySchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    active: Joi.boolean().required()
})
const employeeSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    active: Joi.boolean().required(),
    c_id: Joi.number().required(),
    level: Joi.string().valid('manager', 'teamlead', 'seniordev', 'dev', 'juniordev').required()
})
const teamSchema = Joi.object({
    name: Joi.string().required(),
    active: Joi.boolean().required(),
    cer_id: Joi.number().required()
})

const teamMemberSchema = Joi.object({
    e_id: Joi.number().required(),
    t_id: Joi.number().required(),
    role: Joi.string().valid('teamlead', 'seniordev', 'dev', 'juniordev').required()
})
module.exports = { idSchema, companySchema, employeeSchema, teamSchema, teamMemberSchema }