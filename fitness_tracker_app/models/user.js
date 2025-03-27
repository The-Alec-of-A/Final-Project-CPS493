import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  hashedPassword: { type: String, required: true },
})

const User = model('User', userSchema)

export default User
