/* eslint-disable @typescript-eslint/no-unused-vars */
import User from '../models/user'

// ...existing code...

exports.assignRole = async (req, res) => {
  try {
    const { userId, role } = req.body
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).send('User not found')
    }
    user.role = role
    await user.save()
    res.status(200).send('Role assigned successfully')
  } catch (error) {
    res.status(500).send('Server error')
  }
}

// ...existing code...
