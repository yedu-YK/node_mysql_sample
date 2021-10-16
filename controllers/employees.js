// const Employee = require('../models/Employee');
const EmployeeModel = require('../models/employees');
const CerModel = require('../models/cerModel')
class Employee {
    async findAll(req, res) {
        const getEmployee = await EmployeeModel.getAll()
        console.log(getEmployee, '_----------')
        if (getEmployee.length) {
            res.status(200).json(getEmployee)
        } else {
            res.status(404).json("data not found")
        }
    }
    async findOne(req, res) {
        const getEmployee = await EmployeeModel.findOneById(req.params.id);
        if (getEmployee) {
            res.status(200).json(getEmployee)
        } else {
            res.status(404).json("data not found")
        }
    }
    async addNew(req, res) {
        const { ...Employee } = req.body;
        const setEmployee = await EmployeeModel.createNew(Employee)
        console.log(setEmployee)
        if (setEmployee) {
            if (Employee.level === 'manager') {
                let ids = { e_id: setEmployee[1], c_id: Employee.c_id };
                const setCer = await CerModel.createNew(ids)
                res.status(201).json("data added success")
            } else {
                res.status(201).json("data added success")
            }

        } else {
            res.status(404).json("cannot add new employee")
        }
    }
    async updateOne(req, res) {
        const { ...Employee } = req.body
        const patchEmployee = await EmployeeModel.updateById(Employee, req.params.id);
        if (patchEmployee) {
            res.status(200).json("data updated success")
        } else {
            res.status(404).json("data not found")
        }
    }
    async deleteOne(req, res) {
        const removeEmployee = await EmployeeModel.removeById(req.params.id)
        if (removeEmployee) {
            res.status(200).json(`deleted Employee with id ${req.params.id}`)
        } else {
            res.status(404).json("data not found")
        }
    }
}

module.exports = new Employee;