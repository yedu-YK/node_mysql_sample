// const company = require('../models/company');
const CompanyModel = require('../models/company');

class Company {
    async findAll(req,res){
        const getCompanies = await CompanyModel.getAll()
        console.log(getCompanies, '_----------')
        if (getCompanies.length) {
            res.status(200).json(getCompanies)
        } else {
            res.status(404).json("data not found")
        }
    }
    async findOne(req,res){
        const getCompany = await CompanyModel.findOneById(req.params.id);
        if (getCompany) {
            res.status(200).json(getCompany)
        } else {
            res.status(404).json("data not found")
        }
    }
    async addNew(req,res){
        const {...company} = req.body;
        const setCompany = await CompanyModel.createNew(company)
        console.log(setCompany)
        if (setCompany) {
            res.status(201).json("data added success")
        } else {
            res.status(404).json("data not found")
        }
    }
    async updateOne(req,res) {
        const {...company}= req.body
        const patchCompany = await CompanyModel.updateById(company,req.params.id);
        if (patchCompany) {
            res.status(200).json("data updated success")
        } else {
            res.status(404).json("data not found")
        }
    }
    async deleteOne(req,res){
        const removeCompany = await CompanyModel.removeById(req.params.id)
        if (removeCompany) {
            res.status(200).json(`deleted company with id ${req.params.id}`)
        } else {
            res.status(404).json("data not found")
        }
    }
}

module.exports= new Company;