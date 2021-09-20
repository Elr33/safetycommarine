import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'Etienne le Roux',
    email: 'efleroux@gmail.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'Eugene de Bruin',
    email: 'debruineugene861@gmail.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
]

export default users
