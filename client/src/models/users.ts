
import { api } from './session'

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  age: number
  gender: string
  birthDate: Date
  role: string

}
