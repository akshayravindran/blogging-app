import axios from "axios"

export async function ValidateUser(email: string) {
    let users: any = []
    let authFlag: boolean = false

    await axios.get('https://jsonplaceholder.typicode.com/users')
        .then(async response => users = await response.data)
        .catch(() => alert("Sorry! Some internal error occurred!"));

    await users.forEach((user: any) => {
        if (user.email.toLowerCase() === email) {
            authFlag = true
            localStorage.setItem('blogAppUser', JSON.stringify(user))
        }
    })

    return authFlag
}