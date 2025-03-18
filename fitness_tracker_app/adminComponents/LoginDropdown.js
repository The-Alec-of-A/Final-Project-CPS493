import React from 'react'
import adminUsers from '../adminUser'

const LoginDropdown = () => {
  return (
    <select>
      {/* ...existing code... */}
      {adminUsers.map((user) => (
        <option key={user.username} value={user.username}>
          {user.name}
        </option>
      ))}
      {/* ...existing code... */}
    </select>
  )
}

export default LoginDropdown
