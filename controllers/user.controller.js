const db = require("../db");

class UserController {
  async getUsers(req, res, next) {
    const {fullName, displayName} = req.body
    const newUser = await db.query(`INSERT INTO users (fullName, displayName) values ($1, $2) RETURNING *`, [fullName, displayName])
    res.json('ok')
  }

  async getOneUser(req, res, next) {

  }

  async createUser(req, res, next) {

  }

  async updateUser(req, res, next) {

  }

  async deleteUser(req, res, next) {

  }
}


module.exports = new UserController()