const conn = require('../config');

class EmployeeModel {
    async getAll() {
        // console.log("-----------")
        const data = conn.promise().query(
            "SELECT * FROM employees"
        ).then((data) => {
            return data[0]
        })
        return data
    }
    // async findOneById(id) {
    //     // console.log(id,'________')
    //     const data = conn.promise().query(
    //         "SELECT * FROM employees WHERE id = ?",
    //         [id]
    //     ).then(
    //         (data)=> {
    //             return data[0][0]
    //         }
    //     )
    //     return data
    // }
    async findOneById(id) {
        // console.log(id,'________')
        const data = conn.promise().query(
            "SELECT employees.id,employees.number, employees.level, employees.name AS employee_name , employees.email AS employee_email ,companies.name AS company_name,companies.email AS company_email FROM employees JOIN companies ON companies.id = employees.c_id WHERE employees.id = ? ",
            [id]
        ).then(
            (data) => {
                console.log(data, '+++++++++++++++++data after inner join ++++++++++++')
                return data[0]
            }
        )
        return data
    }
    async createNew(employee) {
        const data = conn.promise().query(
            "INSERT INTO employees SET ?", employee
        ).then((data) => {
            console.log(data)
            return [data[0].affectedRows, data[0].insertId]
        }).catch((err) => {
            console.log(err, "--------------------")
            return 0;
        })
        return data
    }
    async updateById(company, id) {
        const data = conn.promise().query(
            "UPDATE employees SET ? WHERE id = ?",
            [company, id]
        ).then((data) => {
            return data[0].affectedRows
        })
        return data
    }
    async removeById(id) {
        const data = conn.promise().query("DELETE FROM employees WHERE id = ?", [id]).then(
            (data) => {
                return data[0].affectedRows
            }
        )
        return data;
    }

}

module.exports = new EmployeeModel;