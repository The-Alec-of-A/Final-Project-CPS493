const bcrypt = require('bcrypt')
const User = require('./models/user')

async function verifyPassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword)
}

async function getPasswordHash(password) {
  return await bcrypt.hash(password, 10)
}

async function authenticateUser(username, password) {
  const user = await User.findOne({ username })
  if (!user) {
    return false
  }
  const validPassword = await verifyPassword(password, user.hashedPassword)
  if (!validPassword) {
    return false
  }
  return user
}

module.exports = {
  verifyPassword,
  getPasswordHash,
  authenticateUser,
}
