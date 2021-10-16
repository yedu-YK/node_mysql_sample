const TeamMemberModel = require('../models/teamMembers');

class TeamMember {
    async findAll(req,res){
        const getTeamMember = await TeamMemberModel.getAll()
        console.log(getTeamMember, '_----------')
        if (getTeamMember.length) {
            res.status(200).json(getTeamMember)
        } else {
            res.status(404).json("data not found")
        }
    }
    async findOne(req,res){
        const getTeamMember = await TeamMemberModel.findOneById(req.params.id);
        if (getTeamMember) {
            res.status(200).json(getTeamMember)
        } else {
            res.status(404).json("data not found")
        }
    }
    async addNew(req,res){
        const {...TeamMember} = req.body;
        const setTeamMember = await TeamMemberModel.createNew(TeamMember)
        console.log(setTeamMember)
        if (setTeamMember) {
            res.status(201).json("data added success")
        } else {
            res.status(404).json("data not found")
        }
    }
    async updateOne(req,res) {
        const {...TeamMember}= req.body
        const patchTeamMember = await TeamMemberModel.updateById(TeamMember,req.params.id);
        if (patchTeamMember) {
            res.status(200).json("data updated success")
        } else {
            res.status(404).json("data not found")
        }
    }
    async deleteOne(req,res){
        const removeTeamMember = await TeamMemberModel.removeById(req.params.id)
        if (removeTeamMember) {
            res.status(200).json(`deleted TeamMember with id ${req.params.id}`)
        } else {
            res.status(404).json("data not found")
        }
    }
}

module.exports= new TeamMember;