import axios from "axios"

export function ValidateUser(email: string) {
    let flag: boolean = false
    let users: any = []

    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => users = response.data)
        .catch(() => alert("Sorry! Some internal error occurred!"));

    users.forEach((item: any) => {
        if (item.email.toLowerCase() === email) {
            flag = true
            // localStorage.setItem('logText', JSON.stringify("Logout"))
            // document.getElementById('logText').innerHTML = JSON.parse(localStorage.getItem('logText'))
            return flag
        }
    })
    return flag;
}