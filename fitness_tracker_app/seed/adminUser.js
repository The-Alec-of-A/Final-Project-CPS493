const mongoose = require('mongoose')
const User = require('../models/user')

mongoose.connect('mongodb://localhost/fitness_tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const createAdminUser = async () => {
  const user = new User({
    name: 'Alec Arza',
    email: 'alec.arza@example.com',
    password: 'securepassword', // Make sure to hash the password in a real application
    role: 'admin',
  })

  await user.save()
  console.log('Admin user created')
  mongoose.connection.close()
}

createAdminUser()
