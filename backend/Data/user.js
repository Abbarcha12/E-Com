import bcrypt from "bcryptjs"

const users = [{
        name: "Admin user",
        email: "admin@example.com",
        password: bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name: "Abrar",
        email: "Abrar@example.com",
        password: bcrypt.hashSync('123456',10)
    },
    {
        name: "sajid Ali ",
        email: "Sajid@example.com",
        password: bcrypt.hashSync('123456',10)
    }

]
export default users