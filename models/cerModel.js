const conn = require('../config');

class CerModel {
    async getAll() {
        // console.log("-----------")
        const data = conn.promise().query(
            "SELECT * FROM cer"
        ).then((data) => {
            return data[0]
        })
        return data
    }
    async findOneById(id) {
        // console.log(id,'________')
        const data = conn.promise().query(
            "SELECT * FROM cer WHERE id = ?",
            [id]
        ).then(
            (data) => {
                return data[0][0]
            }
        )
        return data
    }
    async createNew(ids) {
        const data = conn.promise().query(
            "INSERT INTO cer SET ?", ids
        ).then((data) => {
            console.log(data)
            return data[0].affectedRows
        }).catch((err) => {
            console.log(err, "--------------------")
            return 0;
        })
        return data
    }
    // async updateById(company, id) {
    //     const data = conn.promise().query(
    //         "UPDATE cer SET ? WHERE id = ?",
    //         [company, id]
    //     ).then((data) => {
    //         return data[0].affectedRows
    //     })
    //     return data
    // }
    async removeById(id) {
        const data = conn.promise().query("DELETE FROM cer WHERE id = ?", [id]).then(
            (data) => {
                return data[0].affectedRows
            }
        )
        return data;
    }

}

module.exports = new CerModel;