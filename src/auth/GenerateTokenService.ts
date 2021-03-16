export function GenerateToken(flag: boolean, props: any) {
    if (flag) {
        alert("Login successful")
        props.history.push("/dashboard")
        localStorage.setItem('blogAppToken', JSON.stringify(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)))
    }
    else
        alert("Login failed")
}