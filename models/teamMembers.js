const conn = require('../config');

class TeamMemberModel {
    async getAll() {
        // console.log("-----------")
        const data = conn.promise().query(
            "SELECT * FROM teammembers"
        ).then((data) => {
            return data[0]
        })
        return data
    }
    async findOneById(id) {
        // console.log(id,'________')
        const data = conn.promise().query(
            "SELECT teammembers.role AS role, companies.name AS company_name, employees.name AS employee_name, teams.name AS team_name FROM teammembers JOIN  teams ON teams.id = teammembers.t_id JOIN cer ON cer.id=teams.cer_id JOIN companies ON companies.id=cer.c_id JOIN employees ON employees.id = cer.e_id WHERE teammembers.id = ?",
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
            "INSERT INTO teammembers SET ?", employee
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
            "UPDATE teammembers SET ? WHERE id = ?",
            [company, id]
        ).then((data) => {
            return data[0].affectedRows
        })
        return data
    }
    async removeById(id) {
        const data = conn.promise().query("DELETE FROM teammembers WHERE id = ?", [id]).then(
            (data) => {
                return data[0].affectedRows
            }
        )
        return data;
    }
}

module.exports = new TeamMemberModel;