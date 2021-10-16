const conn = require('../config');

class CompanyModel {
    async getAll() {
        // console.log("-----------")
        const data = conn.promise().query(
            "SELECT * FROM companies"
        ). then((data) => {
            return data[0]
        })
        return data
    }
    async findOneById(id) {
        // console.log(id,'________')
        const data = conn.promise().query(
            "SELECT * FROM companies WHERE id = ?",
            [id]
        ).then(
            (data)=> {
                return data[0][0]
            }
        )
        return data
    }
    async createNew(company){
        const data = conn.promise().query(
            "INSERT INTO companies SET ?", company
        ).then((data)=> {
            return data[0].affectedRows
        })
        return data
    }
    async updateById(company,id){
        const data = conn.promise().query(
            "UPDATE companies SET ? WHERE id = ?",
            [company,id]
        ).then((data) => {
            return data[0].affectedRows
        })
        return data
    }
    async removeById(id){
        const data = conn.promise().query("DELETE FROM companies WHERE id = ?",[id]).then(
            (data) => {
                return data[0].affectedRows
            }
        )
        return data;
    }
    
}

module.exports = new CompanyModel;