import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Etienne le Roux',
    email: 'efleroux@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Nadia Janse van Vuuren',
    email: 'nadiajvv1986@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
