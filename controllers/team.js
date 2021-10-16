const TeamModel = require('../models/team');

class Team {
    async findAll(req,res){
        const getTeam = await TeamModel.getAll()
        console.log(getTeam, '_----------')
        if (getTeam.length) {
            res.status(200).json(getTeam)
        } else {
            res.status(404).json("data not found")
        }
    }
    async findOne(req,res){
        const getTeam = await TeamModel.findOneById(req.params.id);
        if (getTeam) {
            res.status(200).json(getTeam)
        } else {
            res.status(404).json("data not found")
        }
    }
    async addNew(req,res){
        const {...Team} = req.body;
        const setTeam = await TeamModel.createNew(Team)
        console.log(setTeam)
        if (setTeam) {
            res.status(201).json("data added success")
        } else {
            res.status(404).json("data not found")
        }
    }
    async updateOne(req,res) {
        const {...Team}= req.body
        const patchTeam = await TeamModel.updateById(Team,req.params.id);
        if (patchTeam) {
            res.status(200).json("data updated success")
        } else {
            res.status(404).json("data not found")
        }
    }
    async deleteOne(req,res){
        const removeTeam = await TeamModel.removeById(req.params.id)
        if (removeTeam) {
            res.status(200).json(`deleted Team with id ${req.params.id}`)
        } else {
            res.status(404).json("data not found")
        }
    }
    async getTeamDetails(req,res) {
        const getTeamMembers = await TeamModel.getTeamMembers(req.params.id);
        // console.log(getTeamMembers);
        if (getTeamMembers.length) {
            res.status(200).json(getTeamMembers)
        } else {
            res.status(404).json("team members not found")
        }
    }
}

module.exports= new Team;