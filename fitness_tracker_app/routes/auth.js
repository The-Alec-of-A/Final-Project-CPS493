const express = require('express')
const router = express.Router()
const User = require('../models/user')
const { authenticateUser, getPasswordHash } = require('../auth')

// ...existing code...

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body
  const hashedPassword = await getPasswordHash(password)
  const user = new User({ username, email, hashedPassword })
  await user.save()
  res.json({ msg: 'User registered successfully' })
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body
  const user = await authenticateUser(username, password)
  if (!user) {
    return res.status(400).json({ msg: 'Invalid credentials' })
  }
  res.json({ msg: 'Login successful', userId: user._id })
})

// ...existing code...

module.exports = router
