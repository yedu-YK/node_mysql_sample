const conn = require('../config');

class TeamModel {
    async getAll() {
        // console.log("-----------")
        const data = conn.promise().query(
            "SELECT * FROM teams"
        ).then((data) => {
            return data[0]
        })
        return data
    }
    async findOneById(id) {
        // console.log(id,'________')
        const data = conn.promise().query(
            "SELECT teams.name, employees.name AS created_by, companies.name AS company_name FROM teams JOIN cer ON cer.id = teams.cer_id JOIN companies ON companies.id=cer.c_id JOIN employees ON employees.id = cer.e_id WHERE teams.id = ?",
            [id]
        ).then(
            (data) => {
                return data[0][0]
            }
        )
        return data
    }
    
    async createNew(employee) {
        const data = conn.promise().query(
            "INSERT INTO teams SET ?", employee
        ).then((data) => {
            console.log(data)
            return data[0].affectedRows
        }).catch((err) => {
            // console.log(err, "--------------------")
            return 0;
        })
        return data
    }
    async updateById(company, id) {
        const data = conn.promise().query(
            "UPDATE teams SET ? WHERE id = ?",
            [company, id]
        ).then((data) => {
            return data[0].affectedRows
        })
        return data
    }
    async removeById(id) {
        const data = conn.promise().query("DELETE FROM teams WHERE id = ?", [id]).then(
            (data) => {
                return data[0].affectedRows
            }
        )
        return data;
    }
    async getTeamMembers(id) {
        const data = conn.promise().query(
            "SELECT teammembers.role AS role, teams.name AS team_name, employees.name AS employees_name FROM teammembers JOIN teams ON teams.id = teammembers.t_id JOIN employees ON employees.id = teammembers.e_id WHERE teammembers.t_id = ? ",
            [id]
        ).then(
            (data) => {
                return data[0]
            }
        ).catch((err) => {
            console.log(err,'ERROR _______--------')
            return 0
        })
        return data
    }

}

module.exports = new TeamModel;